# 🚀 CI/CD Setup for Lili Travel

## Overview

Automated deployment pipeline using GitHub Actions to deploy Lili Travel to Hetzner production server.

---

## 📋 Prerequisites

1. ✅ GitHub repository with code
2. ✅ Hetzner server (77.42.34.90) with SSH access
3. ✅ Server already configured with:
   - Node.js 20+
   - PM2
   - Nginx
   - Git

---

## 🔐 GitHub Secrets Configuration

You need to add the following secrets to your GitHub repository:

### Go to: Repository → Settings → Secrets and variables → Actions → New repository secret

### 1. `SERVER_IP`
```
77.42.34.90
```

### 2. `SSH_PRIVATE_KEY`

**Generate SSH key pair (if you don't have one):**

```bash
# On your local machine
ssh-keygen -t rsa -b 4096 -C "github-actions@lili-travel" -f ~/.ssh/lili_travel_deploy

# This creates:
# - Private key: ~/.ssh/lili_travel_deploy
# - Public key: ~/.ssh/lili_travel_deploy.pub
```

**Add public key to server:**

```bash
# Copy public key to server
ssh-copy-id -i ~/.ssh/lili_travel_deploy.pub root@77.42.34.90

# Or manually:
cat ~/.ssh/lili_travel_deploy.pub
# Copy the output and add to server's ~/.ssh/authorized_keys
```

**Add private key to GitHub:**

```bash
# Display private key
cat ~/.ssh/lili_travel_deploy

# Copy the ENTIRE output including:
# -----BEGIN OPENSSH PRIVATE KEY-----
# ... key content ...
# -----END OPENSSH PRIVATE KEY-----
```

Paste this into GitHub Secret named `SSH_PRIVATE_KEY`

---

## 📁 Repository Structure Required

```
lili-travel/
├── .github/
│   └── workflows/
│       └── deploy.yml          # ✅ Created
├── frontend/
│   ├── package.json
│   ├── src/
│   └── ... (React Vite app)
├── backend/
│   ├── package.json
│   ├── server.ts
│   ├── db/
│   └── src/
└── README.md
```

---

## 🔧 Server Preparation

Ensure the server has the project directory initialized:

```bash
# SSH into server
ssh root@77.42.34.90

# Navigate to projects directory
cd /opt/projects

# Clone repository (first time only)
git clone https://github.com/YOUR_USERNAME/lili-travel.git

# Set up frontend
cd lili-travel/frontend
npm install
npm run build

# Create frontend server
cat > server.js << 'EOF'
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => console.log(`Frontend on port ${PORT}`));
EOF

npm install express

# Set up backend
cd ../backend
npm install

# Create .env
cat > .env << 'EOF'
NODE_ENV=production
PORT=3100
JWT_SECRET=your-secret-key
DATABASE_PATH=./lili_travel.db
EOF

# Start PM2 processes (first time)
cd ../frontend
pm2 start server.js --name lili-frontend

cd ../backend
pm2 start server.ts --name lili-backend --interpreter node

pm2 save
pm2 startup systemd
```

---

## 🚀 Deployment Workflow

### Automatic Deployment

Every push to `main` branch triggers automatic deployment:

```bash
# Make changes to code
git add .
git commit -m "Update feature"
git push origin main

# GitHub Actions automatically:
# 1. Checks out code
# 2. Connects to server via SSH
# 3. Pulls latest code
# 4. Installs dependencies
# 5. Builds frontend
# 6. Restarts PM2 processes
# 7. Verifies deployment
```

### Manual Deployment

Trigger deployment manually from GitHub:

1. Go to: Repository → Actions
2. Select "Deploy Lili Travel to Production"
3. Click "Run workflow"
4. Select branch: `main`
5. Click "Run workflow"

---

## 📊 Monitoring Deployment

### View Deployment Logs

1. Go to: Repository → Actions
2. Click on the latest workflow run
3. Click on "Deploy to Hetzner Server"
4. View step-by-step logs

### Check Server Status

```bash
# SSH into server
ssh root@77.42.34.90

# Check PM2 processes
pm2 list

# View logs
pm2 logs lili-frontend --lines 50
pm2 logs lili-backend --lines 50

# Check service health
curl http://localhost:5173
curl http://localhost:3100
```

---

## 🔄 Rollback Procedure

If deployment fails or causes issues:

### Option 1: Rollback via Git

```bash
# On your local machine
git revert HEAD
git push origin main

# This triggers a new deployment with previous code
```

### Option 2: Manual Rollback on Server

```bash
# SSH into server
ssh root@77.42.34.90

cd /opt/projects/lili-travel

# Checkout previous commit
git log --oneline -5  # View recent commits
git checkout <previous-commit-hash>

# Rebuild and restart
cd frontend
npm install
npm run build
pm2 restart lili-frontend

cd ../backend
npm install
pm2 restart lili-backend
```

### Option 3: Emergency Stop

```bash
# Stop services
pm2 stop lili-frontend lili-backend

# Fix issues, then restart
pm2 restart lili-frontend lili-backend
```

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] GitHub Actions workflow completed successfully
- [ ] PM2 processes show "online" status
- [ ] Frontend accessible: https://lili-travel.xyz
- [ ] Backend accessible: https://admin.lili-travel.xyz
- [ ] No errors in PM2 logs
- [ ] Existing services unaffected

---

## 🛡️ Safety Features

The deployment workflow includes:

1. ✅ **Isolated Deployment** - Only touches `/opt/projects/lili-travel`
2. ✅ **Selective Restart** - Only restarts `lili-frontend` and `lili-backend`
3. ✅ **Health Checks** - Verifies services are responding
4. ✅ **Automatic Rollback** - Fails fast if issues detected
5. ✅ **No Server Restart** - Uses PM2 reload, not server reboot
6. ✅ **Preserves Other Services** - Doesn't touch other PM2 processes

---

## 🔍 Troubleshooting

### Deployment Fails at SSH Connection

**Issue:** Cannot connect to server

**Solution:**
```bash
# Verify SSH key is correct in GitHub Secrets
# Test SSH connection locally:
ssh -i ~/.ssh/lili_travel_deploy root@77.42.34.90
```

### Deployment Fails at Git Pull

**Issue:** Git conflicts or authentication

**Solution:**
```bash
# SSH into server
cd /opt/projects/lili-travel
git status
git reset --hard origin/main
git pull origin main
```

### PM2 Process Won't Start

**Issue:** Process crashes immediately

**Solution:**
```bash
# Check logs
pm2 logs lili-backend --lines 100

# Check for missing dependencies
cd /opt/projects/lili-travel/backend
npm install

# Check environment variables
cat .env

# Restart manually
pm2 restart lili-backend
```

### Frontend Build Fails

**Issue:** Build errors during deployment

**Solution:**
```bash
# Check build locally first
cd frontend
npm install
npm run build

# Fix errors, commit, and push
```

---

## 📝 Workflow File Location

```
.github/workflows/deploy.yml
```

This file is automatically triggered on:
- Push to `main` branch
- Manual workflow dispatch

---

## 🎯 Next Steps

1. **Add GitHub Secrets:**
   - `SERVER_IP`: 77.42.34.90
   - `SSH_PRIVATE_KEY`: Your private SSH key

2. **Update Workflow File:**
   - Replace `YOUR_USERNAME` with your GitHub username
   - Adjust ports if different (5173, 3100)

3. **Commit and Push:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add CI/CD deployment workflow"
   git push origin main
   ```

4. **Monitor First Deployment:**
   - Go to GitHub Actions tab
   - Watch the deployment process
   - Verify success

5. **Test Automatic Deployment:**
   - Make a small change
   - Commit and push
   - Verify automatic deployment works

---

## 📞 Support

If deployment fails:
1. Check GitHub Actions logs
2. SSH into server and check PM2 logs
3. Verify all GitHub Secrets are correct
4. Ensure server has Git access to repository

---

**🎉 CI/CD Pipeline Ready!**

Every push to `main` will now automatically deploy to production.
