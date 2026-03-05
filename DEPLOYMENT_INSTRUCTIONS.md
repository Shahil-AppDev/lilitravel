# 🚀 Lili Travel - Deployment Instructions

## ✅ Code Issues Fixed

All critical errors have been resolved:
- ✅ Added TypeScript type declarations (@types/bcryptjs, @types/better-sqlite3, @types/node)
- ✅ Fixed missing `path` import in db/index.ts
- ✅ Added accessibility labels to all form elements
- ✅ Fixed button accessibility in PropertyCalendar

## 📦 Deployment Steps

### Step 1: Build Frontend Locally

```bash
cd "G:\Desktop\Projet Web\Lili Travel"
npm install
npm run build
```

### Step 2: Transfer Files to Server

**Option A: Using the Deployment Script (Recommended)**

1. Upload the deployment script to the server:
```bash
scp deploy-to-hetzner.sh root@77.42.34.90:/tmp/
```

2. Upload frontend build:
```bash
scp -r dist/* root@77.42.34.90:/opt/projects/lili-travel-frontend/
```

3. Upload backend files:
```bash
# Create a tarball excluding node_modules
tar --exclude='node_modules' --exclude='dist' --exclude='.git' -czf lili-backend.tar.gz .

# Upload to server
scp lili-backend.tar.gz root@77.42.34.90:/opt/projects/lili-travel-backend/
```

4. SSH into server and run the script:
```bash
ssh root@77.42.34.90
cd /tmp
chmod +x deploy-to-hetzner.sh
sudo ./deploy-to-hetzner.sh
```

**Option B: Manual Deployment**

Follow the commands in the previous deployment guide step-by-step.

### Step 3: Verify Deployment

Open in browser:
- https://lili-travel.xyz (Frontend)
- https://admin.lili-travel.xyz (Backend)

Check PM2 status:
```bash
pm2 list
pm2 logs
```

## 🔧 Post-Deployment

### Update Application

```bash
# SSH into server
ssh root@77.42.34.90

# Update frontend
cd /opt/projects/lili-travel-frontend
# Upload new build files
pm2 restart lili-travel-frontend

# Update backend
cd /opt/projects/lili-travel-backend
# Upload new files
npm install
pm2 restart lili-travel-backend
```

### View Logs

```bash
# PM2 logs
pm2 logs lili-travel-frontend
pm2 logs lili-travel-backend

# Nginx logs
sudo tail -f /var/log/nginx/lili-travel-frontend-error.log
sudo tail -f /var/log/nginx/lili-travel-backend-error.log
```

### Troubleshooting

```bash
# Check if services are running
pm2 status

# Check ports
sudo lsof -i :5173
sudo lsof -i :3100

# Test Nginx config
sudo nginx -t

# Restart services
pm2 restart all
sudo systemctl reload nginx
```

## 📝 Important Notes

1. **DNS Configuration**: Ensure your domains point to 77.42.34.90
   - lili-travel.xyz → 77.42.34.90
   - www.lili-travel.xyz → 77.42.34.90
   - admin.lili-travel.xyz → 77.42.34.90

2. **SSL Certificates**: Auto-renew is configured via certbot
   - Certificates renew automatically every 90 days
   - Test renewal: `sudo certbot renew --dry-run`

3. **PM2 Startup**: Configured to start on server reboot
   - Services will automatically restart if server reboots

4. **Security**: Change the JWT_SECRET in .env file
   - Edit: `/opt/projects/lili-travel-backend/.env`
   - Use a strong random string

## 🎯 Quick Commands Reference

```bash
# Connect to server
ssh root@77.42.34.90

# View all PM2 processes
pm2 list

# View logs
pm2 logs

# Restart a service
pm2 restart lili-travel-frontend
pm2 restart lili-travel-backend

# Stop a service
pm2 stop lili-travel-frontend

# Delete a service
pm2 delete lili-travel-frontend

# Reload Nginx
sudo systemctl reload nginx

# Check SSL certificates
sudo certbot certificates

# Renew SSL manually
sudo certbot renew
```

## ✅ Deployment Checklist

- [ ] Code errors fixed (npm install ran successfully)
- [ ] Frontend built (`npm run build`)
- [ ] Files transferred to server
- [ ] Deployment script executed
- [ ] PM2 processes running
- [ ] Nginx configured and running
- [ ] SSL certificates installed
- [ ] Frontend accessible at https://lili-travel.xyz
- [ ] Backend accessible at https://admin.lili-travel.xyz
- [ ] No errors in PM2 logs
- [ ] No errors in Nginx logs
