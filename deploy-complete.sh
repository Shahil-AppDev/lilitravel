#!/bin/bash
# Complete Lili Travel Deployment Script
# Run this on the server after transferring files

set -e
echo "🚀 Starting Lili Travel Deployment..."

# Step 1: Check ports
echo "Checking ports..."
if sudo lsof -i :5173 > /dev/null 2>&1; then
    echo "❌ Port 5173 in use"
    exit 1
fi
if sudo lsof -i :3100 > /dev/null 2>&1; then
    echo "❌ Port 3100 in use"
    exit 1
fi
echo "✅ Ports available"

# Step 2: Create directories
echo "Creating directories..."
sudo mkdir -p /opt/projects/lili-travel-frontend /opt/projects/lili-travel-backend
sudo chown -R $USER:$USER /opt/projects/lili-travel-frontend /opt/projects/lili-travel-backend
echo "✅ Directories created"

# Step 3: Install PM2
echo "Installing PM2..."
sudo npm install -g pm2
echo "✅ PM2 installed"

# Step 4: Setup frontend
echo "Setting up frontend..."
cd /opt/projects/lili-travel-frontend
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
  console.log(\`✅ Frontend running on port \${PORT}\`);
});
EOFSERVER
npm init -y > /dev/null 2>&1
npm install express > /dev/null 2>&1
echo "✅ Frontend setup complete"

# Step 5: Setup backend
echo "Setting up backend..."
cd /opt/projects/lili-travel-backend
npm install > /dev/null 2>&1
cat > .env << 'EOFENV'
NODE_ENV=production
PORT=3100
JWT_SECRET=lili-travel-secret-2026-CHANGE-THIS
DATABASE_PATH=./lili_travel.db
EOFENV
echo "✅ Backend setup complete"

# Step 6: Configure Nginx
echo "Configuring Nginx..."
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

sudo ln -sf /etc/nginx/sites-available/lili-travel-frontend /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/lili-travel-backend /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
echo "✅ Nginx configured"

# Step 7: Install SSL
echo "Installing SSL certificates..."
sudo apt update > /dev/null 2>&1
sudo apt install -y certbot python3-certbot-nginx > /dev/null 2>&1
sudo certbot --nginx -d lili-travel.xyz -d www.lili-travel.xyz --non-interactive --agree-tos --email admin@lili-travel.xyz --redirect
sudo certbot --nginx -d admin.lili-travel.xyz --non-interactive --agree-tos --email admin@lili-travel.xyz --redirect
echo "✅ SSL installed"

# Step 8: Start services
echo "Starting services with PM2..."
cd /opt/projects/lili-travel-frontend
pm2 start server.js --name "lili-travel-frontend"
cd /opt/projects/lili-travel-backend
pm2 start server.ts --name "lili-travel-backend" --interpreter node
pm2 save
pm2 startup systemd -u $USER --hp $HOME | tail -1 | sudo bash
echo "✅ Services started"

echo ""
echo "🎉 Deployment Complete!"
echo "Frontend: https://lili-travel.xyz"
echo "Backend: https://admin.lili-travel.xyz"
pm2 list
