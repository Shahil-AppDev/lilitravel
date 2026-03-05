#!/bin/bash
################################################################################
# Lili Travel - Production-Safe Deployment Script
# Server: 77.42.34.90
# IMPORTANT: This script inspects the server and avoids conflicts
################################################################################

set -e  # Exit on error

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║     Lili Travel - Production Deployment Script            ║${NC}"
echo -e "${BLUE}║     Safe deployment without affecting existing services   ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

################################################################################
# STEP 1: SERVER INSPECTION
################################################################################
echo -e "${YELLOW}[STEP 1/11] Server Inspection${NC}"
echo "----------------------------------------"

echo "Current user: $(whoami)"
echo "Hostname: $(hostname)"
echo "Working directory: $(pwd)"
echo ""

echo "Checking existing services..."
echo -e "${BLUE}Existing PM2 processes:${NC}"
pm2 list || echo "PM2 not installed or no processes"
echo ""

echo -e "${BLUE}Ports currently in use:${NC}"
sudo lsof -i -P -n | grep LISTEN | awk '{print $9}' | sort | uniq
echo ""

echo -e "${BLUE}Existing Nginx sites:${NC}"
ls -1 /etc/nginx/sites-enabled/ 2>/dev/null || echo "No sites enabled"
echo ""

read -p "Press ENTER to continue or Ctrl+C to abort..."

################################################################################
# STEP 2: SELECT SAFE PORTS
################################################################################
echo -e "\n${YELLOW}[STEP 2/11] Selecting Safe Ports${NC}"
echo "----------------------------------------"

# Function to check if port is free
check_port() {
    if sudo lsof -i :$1 > /dev/null 2>&1; then
        return 1  # Port in use
    else
        return 0  # Port free
    fi
}

# Find free frontend port
FRONTEND_PORT=5173
while ! check_port $FRONTEND_PORT; do
    echo "Port $FRONTEND_PORT is in use, trying next..."
    FRONTEND_PORT=$((FRONTEND_PORT + 1))
done
echo -e "${GREEN}✓ Frontend port selected: $FRONTEND_PORT${NC}"

# Find free backend port
BACKEND_PORT=3100
while ! check_port $BACKEND_PORT; do
    echo "Port $BACKEND_PORT is in use, trying next..."
    BACKEND_PORT=$((BACKEND_PORT + 1))
done
echo -e "${GREEN}✓ Backend port selected: $BACKEND_PORT${NC}"

################################################################################
# STEP 3: CREATE PROJECT DIRECTORY
################################################################################
echo -e "\n${YELLOW}[STEP 3/11] Creating Project Structure${NC}"
echo "----------------------------------------"

sudo mkdir -p /opt/projects/lili-travel/frontend
sudo mkdir -p /opt/projects/lili-travel/backend
sudo chown -R $USER:$USER /opt/projects/lili-travel

echo -e "${GREEN}✓ Created /opt/projects/lili-travel/frontend${NC}"
echo -e "${GREEN}✓ Created /opt/projects/lili-travel/backend${NC}"

################################################################################
# STEP 4: VERIFY NODE
################################################################################
echo -e "\n${YELLOW}[STEP 4/11] Verifying Node.js${NC}"
echo "----------------------------------------"

NODE_VERSION=$(node -v 2>/dev/null | cut -d'v' -f2 | cut -d'.' -f1)

if [ -z "$NODE_VERSION" ]; then
    echo "Node.js not found. Installing Node 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
elif [ "$NODE_VERSION" -lt 20 ]; then
    echo "Node.js version $NODE_VERSION detected. Upgrading to Node 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo -e "${GREEN}✓ Node.js verified${NC}"

################################################################################
# STEP 5: DEPLOY FRONTEND
################################################################################
echo -e "\n${YELLOW}[STEP 5/11] Deploying Frontend${NC}"
echo "----------------------------------------"

cd /opt/projects/lili-travel/frontend

# Create static server
cat > server.js << EOFSERVER
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || ${FRONTEND_PORT};
app.listen(PORT, () => {
  console.log(\`Frontend server running on port \${PORT}\`);
});
EOFSERVER

# Initialize npm and install express
npm init -y > /dev/null 2>&1
npm install express > /dev/null 2>&1

echo -e "${GREEN}✓ Frontend static server configured on port $FRONTEND_PORT${NC}"
echo -e "${YELLOW}⚠ Note: You need to upload your built frontend files to this directory${NC}"

################################################################################
# STEP 6: DEPLOY BACKEND
################################################################################
echo -e "\n${YELLOW}[STEP 6/11] Deploying Backend${NC}"
echo "----------------------------------------"

cd /opt/projects/lili-travel/backend

# Create .env file
cat > .env << EOFENV
NODE_ENV=production
PORT=${BACKEND_PORT}
JWT_SECRET=lili-travel-production-$(openssl rand -hex 32)
DATABASE_PATH=./lili_travel.db
EOFENV

echo -e "${GREEN}✓ Backend environment configured on port $BACKEND_PORT${NC}"
echo -e "${YELLOW}⚠ Note: You need to upload your backend files and run 'npm install'${NC}"

################################################################################
# STEP 7: PROCESS MANAGEMENT
################################################################################
echo -e "\n${YELLOW}[STEP 7/11] Configuring PM2${NC}"
echo "----------------------------------------"

# Install PM2 if not present
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    sudo npm install -g pm2
fi

echo "PM2 version: $(pm2 -v)"
echo -e "${GREEN}✓ PM2 ready${NC}"
echo -e "${YELLOW}⚠ PM2 processes will be started after files are uploaded${NC}"

################################################################################
# STEP 8: NGINX CONFIGURATION
################################################################################
echo -e "\n${YELLOW}[STEP 8/11] Creating Nginx Configurations${NC}"
echo "----------------------------------------"

# Frontend Nginx config
sudo tee /etc/nginx/sites-available/lili-travel.xyz > /dev/null << EOFFRONTEND
server {
    listen 80;
    server_name lili-travel.xyz www.lili-travel.xyz;

    access_log /var/log/nginx/lili-travel-frontend-access.log;
    error_log /var/log/nginx/lili-travel-frontend-error.log;

    location / {
        proxy_pass http://localhost:${FRONTEND_PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOFFRONTEND

# Backend Nginx config
sudo tee /etc/nginx/sites-available/admin.lili-travel.xyz > /dev/null << EOFBACKEND
server {
    listen 80;
    server_name admin.lili-travel.xyz;

    access_log /var/log/nginx/lili-travel-backend-access.log;
    error_log /var/log/nginx/lili-travel-backend-error.log;

    client_max_body_size 50M;

    location / {
        proxy_pass http://localhost:${BACKEND_PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
}
EOFBACKEND

# Enable sites
sudo ln -sf /etc/nginx/sites-available/lili-travel.xyz /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/admin.lili-travel.xyz /etc/nginx/sites-enabled/

echo -e "${GREEN}✓ Nginx configurations created${NC}"

# Test Nginx config
echo "Testing Nginx configuration..."
if sudo nginx -t; then
    echo -e "${GREEN}✓ Nginx configuration valid${NC}"
    sudo systemctl reload nginx
    echo -e "${GREEN}✓ Nginx reloaded safely${NC}"
else
    echo -e "${RED}✗ Nginx configuration error!${NC}"
    echo "Rolling back..."
    sudo rm /etc/nginx/sites-enabled/lili-travel.xyz
    sudo rm /etc/nginx/sites-enabled/admin.lili-travel.xyz
    exit 1
fi

################################################################################
# STEP 9: SSL CERTIFICATES
################################################################################
echo -e "\n${YELLOW}[STEP 9/11] Installing SSL Certificates${NC}"
echo "----------------------------------------"

# Install Certbot if needed
if ! command -v certbot &> /dev/null; then
    echo "Installing Certbot..."
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
fi

# Install SSL for frontend
echo "Installing SSL for lili-travel.xyz..."
sudo certbot --nginx -d lili-travel.xyz -d www.lili-travel.xyz \
    --non-interactive --agree-tos --email admin@lili-travel.xyz --redirect

# Install SSL for backend
echo "Installing SSL for admin.lili-travel.xyz..."
sudo certbot --nginx -d admin.lili-travel.xyz \
    --non-interactive --agree-tos --email admin@lili-travel.xyz --redirect

echo -e "${GREEN}✓ SSL certificates installed${NC}"

################################################################################
# STEP 10: VALIDATION
################################################################################
echo -e "\n${YELLOW}[STEP 10/11] Validation${NC}"
echo "----------------------------------------"

echo "Checking Nginx status..."
sudo systemctl status nginx --no-pager | head -5

echo ""
echo "Checking existing PM2 processes (should be unchanged)..."
pm2 list

echo ""
echo -e "${GREEN}✓ Validation complete${NC}"

################################################################################
# STEP 11: DEPLOYMENT SUMMARY
################################################################################
echo -e "\n${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║              DEPLOYMENT SUMMARY                            ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}Ports Selected:${NC}"
echo "  Frontend: $FRONTEND_PORT"
echo "  Backend:  $BACKEND_PORT"
echo ""
echo -e "${GREEN}Project Structure:${NC}"
echo "  /opt/projects/lili-travel/frontend"
echo "  /opt/projects/lili-travel/backend"
echo ""
echo -e "${GREEN}Nginx Configurations:${NC}"
echo "  /etc/nginx/sites-available/lili-travel.xyz"
echo "  /etc/nginx/sites-available/admin.lili-travel.xyz"
echo ""
echo -e "${GREEN}SSL Certificates:${NC}"
echo "  ✓ lili-travel.xyz"
echo "  ✓ www.lili-travel.xyz"
echo "  ✓ admin.lili-travel.xyz"
echo ""
echo -e "${YELLOW}NEXT STEPS:${NC}"
echo ""
echo "1. Upload frontend files:"
echo "   scp -r dist/* root@77.42.34.90:/opt/projects/lili-travel/frontend/"
echo ""
echo "2. Upload backend files:"
echo "   scp -r db server.ts package.json src root@77.42.34.90:/opt/projects/lili-travel/backend/"
echo ""
echo "3. Install backend dependencies:"
echo "   cd /opt/projects/lili-travel/backend && npm install"
echo ""
echo "4. Start PM2 processes:"
echo "   cd /opt/projects/lili-travel/frontend"
echo "   pm2 start server.js --name lili-frontend"
echo "   cd /opt/projects/lili-travel/backend"
echo "   pm2 start server.ts --name lili-backend --interpreter node"
echo "   pm2 save"
echo ""
echo "5. Verify deployment:"
echo "   https://lili-travel.xyz"
echo "   https://admin.lili-travel.xyz"
echo ""
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${GREEN}✓ Server prepared for Lili Travel deployment!${NC}"
echo ""

################################################################################
# ROLLBACK INSTRUCTIONS
################################################################################
cat > /opt/projects/lili-travel/ROLLBACK.sh << 'EOFROLLBACK'
#!/bin/bash
# Rollback script for Lili Travel

echo "Rolling back Lili Travel deployment..."

# Stop PM2 processes
pm2 stop lili-frontend lili-backend 2>/dev/null
pm2 delete lili-frontend lili-backend 2>/dev/null
pm2 save

# Disable Nginx sites
sudo rm /etc/nginx/sites-enabled/lili-travel.xyz
sudo rm /etc/nginx/sites-enabled/admin.lili-travel.xyz
sudo nginx -t && sudo systemctl reload nginx

# Remove SSL certificates
sudo certbot delete --cert-name lili-travel.xyz
sudo certbot delete --cert-name admin.lili-travel.xyz

echo "Rollback complete. Project files remain in /opt/projects/lili-travel"
EOFROLLBACK

chmod +x /opt/projects/lili-travel/ROLLBACK.sh

echo -e "${YELLOW}Rollback script created: /opt/projects/lili-travel/ROLLBACK.sh${NC}"
