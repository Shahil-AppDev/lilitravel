# 🚀 Lili Travel - Production Deployment Guide

## ⚠️ CRITICAL: Production Server - Existing Services Running

This guide ensures safe deployment without affecting existing services.

---

## STEP 1: INSPECT SERVER (Copy to SSH Terminal)

```bash
# Check what ports are currently in use
sudo lsof -i -P -n | grep LISTEN

# Check PM2 processes
pm2 list

# Check existing Nginx configurations
sudo ls -la /etc/nginx/sites-enabled/

# Check Nginx server names
sudo nginx -T 2>&1 | grep "server_name" | sort | uniq
```

**Document the output before proceeding!**

---

## STEP 2: VERIFY PORTS ARE FREE

```bash
# Check if our target ports are free
sudo lsof -i :5173
sudo lsof -i :3100

# If ports are in use, check alternatives
sudo lsof -i :5174
sudo lsof -i :5175
sudo lsof -i :3101
sudo lsof -i :3102
```

**✅ Ports to use:**
- Frontend: `5173` (or first available: 5174, 5175, 5176)
- Backend: `3100` (or first available: 3101, 3102, 3103)

---

## STEP 3: CREATE PROJECT DIRECTORIES

```bash
# Create directories (won't affect existing projects)
sudo mkdir -p /opt/projects/lili-travel/frontend
sudo mkdir -p /opt/projects/lili-travel/backend

# Set ownership
sudo chown -R $USER:$USER /opt/projects/lili-travel

# Verify
ls -la /opt/projects/
```

---

## STEP 4: TRANSFER FILES

**Open a NEW PowerShell window on your LOCAL machine:**

```powershell
# Navigate to project
cd "G:\Desktop\Projet Web\Lili Travel"

# Ensure frontend is built
npm run build

# Transfer frontend build
scp -r dist/* root@77.42.34.90:/opt/projects/lili-travel/frontend/

# Transfer backend files
scp -r db server.ts package.json package-lock.json src root@77.42.34.90:/opt/projects/lili-travel/backend/
```

---

## STEP 5: SETUP FRONTEND

**Back in SSH terminal:**

```bash
cd /opt/projects/lili-travel/frontend

# Create static server
cat > server.js << 'EOF'
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});
EOF

# Initialize and install express
npm init -y
npm install express

# Test server
node server.js
# Press Ctrl+C after verifying it starts
```

---

## STEP 6: SETUP BACKEND

```bash
cd /opt/projects/lili-travel/backend

# Install dependencies
npm install

# Create .env file
cat > .env << 'EOF'
NODE_ENV=production
PORT=3100
JWT_SECRET=lili-travel-production-secret-CHANGE-THIS
DATABASE_PATH=./lili_travel.db
EOF

# Test backend
npm start
# Press Ctrl+C after verifying it starts
```

---

## STEP 7: CONFIGURE PM2

```bash
# Start frontend
cd /opt/projects/lili-travel/frontend
pm2 start server.js --name "lili-frontend" -- --port 5173

# Start backend
cd /opt/projects/lili-travel/backend
pm2 start server.ts --name "lili-backend" --interpreter node

# Check all PM2 processes (including existing ones)
pm2 list

# Save PM2 configuration
pm2 save

# Ensure PM2 starts on boot (if not already configured)
pm2 startup systemd
# Run the command it outputs if needed
```

**✅ Verify existing PM2 processes are still running!**

---

## STEP 8: CREATE NGINX CONFIGURATIONS

### Frontend Configuration

```bash
sudo tee /etc/nginx/sites-available/lili-travel.xyz > /dev/null << 'EOF'
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
EOF
```

### Backend Configuration

```bash
sudo tee /etc/nginx/sites-available/admin.lili-travel.xyz > /dev/null << 'EOF'
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
EOF
```

---

## STEP 9: ENABLE NGINX SITES

```bash
# Create symlinks
sudo ln -s /etc/nginx/sites-available/lili-travel.xyz /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/admin.lili-travel.xyz /etc/nginx/sites-enabled/

# Verify symlinks created
ls -la /etc/nginx/sites-enabled/ | grep lili

# CRITICAL: Test Nginx configuration before reloading
sudo nginx -t
```

**⚠️ Only proceed if nginx -t shows "syntax is ok"**

```bash
# Reload Nginx (safe - doesn't affect existing sites)
sudo systemctl reload nginx

# Verify Nginx is still running
sudo systemctl status nginx
```

---

## STEP 10: INSTALL SSL CERTIFICATES

```bash
# Install Certbot if not already installed
sudo apt update
sudo apt install -y certbot python3-certbot-nginx

# Get SSL for frontend
sudo certbot --nginx -d lili-travel.xyz -d www.lili-travel.xyz

# Get SSL for backend
sudo certbot --nginx -d admin.lili-travel.xyz

# Follow prompts:
# - Enter email
# - Agree to terms (Y)
# - Choose option 2 (Redirect HTTP to HTTPS)

# Verify auto-renewal
sudo certbot renew --dry-run
```

---

## STEP 11: VERIFICATION

### Check Services

```bash
# Verify PM2 processes (all should be online)
pm2 list

# Check frontend is responding
curl http://localhost:5173

# Check backend is responding
curl http://localhost:3100

# Check HTTPS
curl -I https://lili-travel.xyz
curl -I https://admin.lili-travel.xyz
```

### Check Existing Services

```bash
# Verify existing PM2 processes are still running
pm2 list

# Verify existing Nginx sites are still working
sudo nginx -T 2>&1 | grep "server_name"

# Check all listening ports
sudo lsof -i -P -n | grep LISTEN
```

---

## 🌐 FINAL VERIFICATION

Open in browser:
- ✅ https://lili-travel.xyz
- ✅ https://admin.lili-travel.xyz
- ✅ All existing sites still working

---

## 📊 DEPLOYMENT SUMMARY

**Ports Used:**
- Frontend: 5173
- Backend: 3100

**PM2 Processes:**
- lili-frontend (port 5173)
- lili-backend (port 3100)

**Nginx Configurations:**
- /etc/nginx/sites-available/lili-travel.xyz
- /etc/nginx/sites-available/admin.lili-travel.xyz

**SSL Certificates:**
- lili-travel.xyz
- www.lili-travel.xyz
- admin.lili-travel.xyz

---

## 🔄 ROLLBACK PLAN

If something goes wrong:

```bash
# Stop PM2 processes
pm2 stop lili-frontend lili-backend
pm2 delete lili-frontend lili-backend
pm2 save

# Disable Nginx sites
sudo rm /etc/nginx/sites-enabled/lili-travel.xyz
sudo rm /etc/nginx/sites-enabled/admin.lili-travel.xyz
sudo nginx -t
sudo systemctl reload nginx

# Remove SSL certificates (if needed)
sudo certbot delete --cert-name lili-travel.xyz
sudo certbot delete --cert-name admin.lili-travel.xyz

# Remove project files
sudo rm -rf /opt/projects/lili-travel

# Verify existing services
pm2 list
sudo systemctl status nginx
```

---

## 📝 MAINTENANCE COMMANDS

```bash
# View logs
pm2 logs lili-frontend
pm2 logs lili-backend
sudo tail -f /var/log/nginx/lili-travel-frontend-error.log
sudo tail -f /var/log/nginx/lili-travel-backend-error.log

# Restart services
pm2 restart lili-frontend
pm2 restart lili-backend

# Update application
cd /opt/projects/lili-travel/backend
git pull  # if using git
npm install
pm2 restart lili-backend
```

---

**🚀 Ready to deploy! Execute commands step-by-step in your SSH terminal.**
