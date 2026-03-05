# 🚀 DEPLOY LILI TRAVEL - EXECUTE THESE COMMANDS

## ✅ You're Connected to Server!
SSH Session Active: root@77.42.34.90

---

## STEP 1: Check Ports (Copy & Paste in SSH Terminal)

```bash
sudo lsof -i :5173
sudo lsof -i :3100
```

**Expected:** No output = ports are free ✅

---

## STEP 2: Create Directories

```bash
sudo mkdir -p /opt/projects/lili-travel-frontend
sudo mkdir -p /opt/projects/lili-travel-backend
sudo chown -R $USER:$USER /opt/projects/lili-travel-frontend
sudo chown -R $USER:$USER /opt/projects/lili-travel-backend
ls -la /opt/projects/
```

---

## STEP 3: Check Node.js & Install PM2

```bash
node --version
npm --version
sudo npm install -g pm2
pm2 --version
```

---

## STEP 4: Setup Frontend Directory

```bash
cd /opt/projects/lili-travel-frontend

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
  console.log(`✅ Frontend running on port ${PORT}`);
});
EOF

npm init -y
npm install express
```

---

## STEP 5: Setup Backend Directory

```bash
cd /opt/projects/lili-travel-backend

cat > .env << 'EOF'
NODE_ENV=production
PORT=3100
JWT_SECRET=lili-travel-secret-2026-CHANGE-THIS
DATABASE_PATH=./lili_travel.db
EOF
```

---

## STEP 6: Create Nginx Configs

```bash
sudo tee /etc/nginx/sites-available/lili-travel-frontend > /dev/null << 'EOF'
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

sudo tee /etc/nginx/sites-available/lili-travel-backend > /dev/null << 'EOF'
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

## STEP 7: Enable Nginx Sites

```bash
sudo ln -sf /etc/nginx/sites-available/lili-travel-frontend /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/lili-travel-backend /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## STEP 8: Install SSL

```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx

sudo certbot --nginx -d lili-travel.xyz -d www.lili-travel.xyz --non-interactive --agree-tos --email admin@lili-travel.xyz --redirect

sudo certbot --nginx -d admin.lili-travel.xyz --non-interactive --agree-tos --email admin@lili-travel.xyz --redirect
```

---

## ⚠️ IMPORTANT: Transfer Files First!

**Before starting PM2, you need to transfer your files!**

### Open a NEW PowerShell window on your LOCAL machine:

```powershell
# Build frontend
cd "G:\Desktop\Projet Web\Lili Travel"
npm run build

# Transfer frontend
scp -r dist/* root@77.42.34.90:/opt/projects/lili-travel-frontend/

# Transfer backend
scp -r db server.ts package.json package-lock.json src root@77.42.34.90:/opt/projects/lili-travel-backend/
```

---

## STEP 9: Install Backend Dependencies & Start Services

**Back on the SERVER (SSH terminal):**

```bash
cd /opt/projects/lili-travel-backend
npm install

cd /opt/projects/lili-travel-frontend
pm2 start server.js --name "lili-travel-frontend"

cd /opt/projects/lili-travel-backend
pm2 start server.ts --name "lili-travel-backend" --interpreter node

pm2 list
pm2 save
pm2 startup systemd
```

**Copy and run the command that pm2 startup outputs!**

---

## STEP 10: Verify

```bash
pm2 logs
curl http://localhost:5173
curl http://localhost:3100
```

**Open in browser:**
- https://lili-travel.xyz
- https://admin.lili-travel.xyz

---

## 🎉 Done!

Your Lili Travel app is now deployed with SSL!
