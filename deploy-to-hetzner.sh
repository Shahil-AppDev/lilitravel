#!/bin/bash

###############################################################################
# Lili Travel - Automated Deployment Script for Hetzner VPS
# Server: 77.42.34.90
# Frontend: lili-travel.xyz (Port 5173)
# Backend: admin.lili-travel.xyz (Port 3100)
###############################################################################

set -e  # Exit on any error

echo "🚀 Starting Lili Travel Deployment..."
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
FRONTEND_PORT=5173
BACKEND_PORT=3100
FRONTEND_DIR="/opt/projects/lili-travel-frontend"
BACKEND_DIR="/opt/projects/lili-travel-backend"

###############################################################################
# STEP 1: Check Ports
###############################################################################
echo -e "\n${YELLOW}[1/10] Checking if ports are available...${NC}"

if sudo lsof -i :$FRONTEND_PORT > /dev/null 2>&1; then
    echo -e "${RED}❌ Port $FRONTEND_PORT is already in use!${NC}"
    echo "Please choose a different port or stop the service using it."
    exit 1
fi

if sudo lsof -i :$BACKEND_PORT > /dev/null 2>&1; then
    echo -e "${RED}❌ Port $BACKEND_PORT is already in use!${NC}"
    echo "Please choose a different port or stop the service using it."
    exit 1
fi

echo -e "${GREEN}✅ Ports $FRONTEND_PORT and $BACKEND_PORT are available${NC}"

###############################################################################
# STEP 2: Create Project Directories
###############################################################################
echo -e "\n${YELLOW}[2/10] Creating project directories...${NC}"

sudo mkdir -p $FRONTEND_DIR
sudo mkdir -p $BACKEND_DIR
sudo chown -R $USER:$USER $FRONTEND_DIR
sudo chown -R $USER:$USER $BACKEND_DIR

echo -e "${GREEN}✅ Directories created${NC}"

###############################################################################
# STEP 3: Check Node.js Installation
###############################################################################
echo -e "\n${YELLOW}[3/10] Checking Node.js installation...${NC}"

if ! command -v node &> /dev/null; then
    echo "Node.js not found. Installing Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 20 ]; then
        echo "Node.js version is less than 20. Upgrading..."
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt-get install -y nodejs
    fi
fi

echo -e "${GREEN}✅ Node.js $(node -v) installed${NC}"

###############################################################################
# STEP 4: Install PM2
###############################################################################
echo -e "\n${YELLOW}[4/10] Installing PM2...${NC}"

if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
    echo -e "${GREEN}✅ PM2 installed${NC}"
else
    echo -e "${GREEN}✅ PM2 already installed${NC}"
fi

###############################################################################
# STEP 5: Setup Frontend
###############################################################################
echo -e "\n${YELLOW}[5/10] Setting up frontend...${NC}"

cd $FRONTEND_DIR

# Create Express server for serving static files
cat > server.js << 'EOFSERVER'
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`✅ Frontend server running on port ${PORT}`);
});
EOFSERVER

# Initialize npm and install express
npm init -y > /dev/null 2>&1
npm install express > /dev/null 2>&1

echo -e "${GREEN}✅ Frontend setup complete${NC}"

###############################################################################
# STEP 6: Setup Backend
###############################################################################
echo -e "\n${YELLOW}[6/10] Setting up backend...${NC}"

cd $BACKEND_DIR

# Install dependencies if package.json exists
if [ -f "package.json" ]; then
    npm install > /dev/null 2>&1
    echo -e "${GREEN}✅ Backend dependencies installed${NC}"
else
    echo -e "${YELLOW}⚠️  No package.json found. Skipping npm install.${NC}"
fi

# Create .env file
cat > .env << 'EOFENV'
NODE_ENV=production
PORT=3100
JWT_SECRET=lili-travel-production-secret-2026-CHANGE-THIS
DATABASE_PATH=./lili_travel.db
EOFENV

echo -e "${GREEN}✅ Backend setup complete${NC}"

###############################################################################
# STEP 7: Start Services with PM2
###############################################################################
echo -e "\n${YELLOW}[7/10] Starting services with PM2...${NC}"

# Stop existing processes if they exist
pm2 delete lili-travel-frontend 2>/dev/null || true
pm2 delete lili-travel-backend 2>/dev/null || true

# Start frontend
cd $FRONTEND_DIR
pm2 start server.js --name "lili-travel-frontend"

# Start backend
cd $BACKEND_DIR
pm2 start server.ts --name "lili-travel-backend" --interpreter node

# Save PM2 configuration
pm2 save

echo -e "${GREEN}✅ Services started with PM2${NC}"

###############################################################################
# STEP 8: Configure Nginx
###############################################################################
echo -e "\n${YELLOW}[8/10] Configuring Nginx...${NC}"

# Frontend Nginx config
sudo tee /etc/nginx/sites-available/lili-travel-frontend > /dev/null << 'EOFFRONTEND'
server {
    listen 80;
    server_name lili-travel.xyz www.lili-travel.xyz;

    access_log /var/log/nginx/lili-travel-frontend-access.log;
    error_log /var/log/nginx/lili-travel-frontend-error.log;

    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOFFRONTEND

# Backend Nginx config
sudo tee /etc/nginx/sites-available/lili-travel-backend > /dev/null << 'EOFBACKEND'
server {
    listen 80;
    server_name admin.lili-travel.xyz;

    access_log /var/log/nginx/lili-travel-backend-access.log;
    error_log /var/log/nginx/lili-travel-backend-error.log;

    client_max_body_size 50M;

    location / {
        proxy_pass http://localhost:3100;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
}
EOFBACKEND

# Enable sites
sudo ln -sf /etc/nginx/sites-available/lili-travel-frontend /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/lili-travel-backend /etc/nginx/sites-enabled/

# Test Nginx configuration
if sudo nginx -t; then
    echo -e "${GREEN}✅ Nginx configuration valid${NC}"
    sudo systemctl reload nginx
else
    echo -e "${RED}❌ Nginx configuration error!${NC}"
    exit 1
fi

###############################################################################
# STEP 9: Install SSL Certificates
###############################################################################
echo -e "\n${YELLOW}[9/10] Installing SSL certificates...${NC}"

# Check if certbot is installed
if ! command -v certbot &> /dev/null; then
    echo "Installing Certbot..."
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
fi

# Install SSL for frontend
echo "Installing SSL for lili-travel.xyz..."
sudo certbot --nginx -d lili-travel.xyz -d www.lili-travel.xyz --non-interactive --agree-tos --email admin@lili-travel.xyz --redirect

# Install SSL for backend
echo "Installing SSL for admin.lili-travel.xyz..."
sudo certbot --nginx -d admin.lili-travel.xyz --non-interactive --agree-tos --email admin@lili-travel.xyz --redirect

echo -e "${GREEN}✅ SSL certificates installed${NC}"

###############################################################################
# STEP 10: Setup PM2 Startup
###############################################################################
echo -e "\n${YELLOW}[10/10] Configuring PM2 startup...${NC}"

pm2 startup systemd -u $USER --hp /home/$USER > /tmp/pm2-startup.sh 2>&1
if [ -f /tmp/pm2-startup.sh ]; then
    sudo bash /tmp/pm2-startup.sh
    rm /tmp/pm2-startup.sh
fi

pm2 save

echo -e "${GREEN}✅ PM2 startup configured${NC}"

###############################################################################
# Final Verification
###############################################################################
echo -e "\n${GREEN}======================================"
echo "🎉 Deployment Complete!"
echo "======================================${NC}"

echo -e "\n📊 Service Status:"
pm2 list

echo -e "\n🌐 Your sites are now live:"
echo -e "  Frontend: ${GREEN}https://lili-travel.xyz${NC}"
echo -e "  Backend:  ${GREEN}https://admin.lili-travel.xyz${NC}"

echo -e "\n📝 Useful Commands:"
echo "  View logs:     pm2 logs"
echo "  Restart:       pm2 restart all"
echo "  Stop:          pm2 stop all"
echo "  Nginx reload:  sudo systemctl reload nginx"

echo -e "\n✅ Deployment successful!"
