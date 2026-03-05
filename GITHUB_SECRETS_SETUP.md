# 🔐 GitHub Secrets Setup - Fix Deployment Error

## ❌ Current Error

Your GitHub Actions workflow is failing because the secrets are not configured:
```
SSH_PRIVATE_KEY: (empty)
SERVER_IP: (empty)
```

---

## ✅ Solution: Add GitHub Secrets

### Step 1: Generate SSH Key Pair

**Run these commands on your LOCAL machine:**

```bash
# Generate a new SSH key specifically for GitHub Actions
ssh-keygen -t rsa -b 4096 -C "github-actions@lili-travel" -f lili_deploy

# This creates two files:
# - lili_deploy (private key) - for GitHub
# - lili_deploy.pub (public key) - for server
```

**When prompted:**
- Enter file name: `lili_deploy` (or press Enter to use default)
- Passphrase: **Leave empty** (just press Enter twice)

---

### Step 2: Add Public Key to Server

**Copy the public key:**
```bash
cat lili_deploy.pub
```

**SSH into your server and add the key:**
```bash
# Connect to server
ssh root@77.42.34.90

# Add the public key to authorized_keys
echo "YOUR_PUBLIC_KEY_HERE" >> ~/.ssh/authorized_keys

# Set correct permissions
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh

# Exit server
exit
```

**Test the connection:**
```bash
# Test SSH with the new key
ssh -i lili_deploy root@77.42.34.90

# If it works without asking for password, you're good!
# Exit and continue
exit
```

---

### Step 3: Add Secrets to GitHub

**Go to your repository settings:**
```
https://github.com/Shahil-AppDev/lilitravel/settings/secrets/actions
```

**Or navigate:**
1. Go to your repository: https://github.com/Shahil-AppDev/lilitravel
2. Click **Settings** (top menu)
3. Click **Secrets and variables** → **Actions** (left sidebar)
4. Click **New repository secret**

---

### Secret 1: SERVER_IP

**Click "New repository secret"**

```
Name: SERVER_IP
Secret: 77.42.34.90
```

Click **Add secret**

---

### Secret 2: SSH_PRIVATE_KEY

**Click "New repository secret"**

**Get the private key:**
```bash
cat lili_deploy
```

**Copy the ENTIRE output including:**
```
-----BEGIN OPENSSH PRIVATE KEY-----
... (all the key content) ...
-----END OPENSSH PRIVATE KEY-----
```

**Add to GitHub:**
```
Name: SSH_PRIVATE_KEY
Secret: [paste the entire private key here]
```

Click **Add secret**

---

## ✅ Verify Secrets Are Added

After adding both secrets, you should see:

```
SERVER_IP
SSH_PRIVATE_KEY
```

Both showing as "Updated X seconds ago"

---

## 🚀 Trigger Deployment

### Option 1: Push a Change

```bash
# Make a small change
echo "# CI/CD configured" >> README.md

# Commit and push
git add README.md
git commit -m "Test CI/CD deployment"
git push origin master
```

### Option 2: Manual Trigger

1. Go to: https://github.com/Shahil-AppDev/lilitravel/actions
2. Click on "Deploy Lili Travel to Production" or "Safe Deploy to Production"
3. Click **Run workflow**
4. Select branch: **master**
5. Click **Run workflow**

---

## 📊 Monitor Deployment

**Watch the deployment:**
1. Go to: https://github.com/Shahil-AppDev/lilitravel/actions
2. Click on the running workflow
3. Click on "Deploy Lili Travel" job
4. Watch the steps execute in real-time

**Expected output:**
```
✅ SSH configured
🚀 Starting Lili Travel Deployment...
📥 Pulling latest code from GitHub...
🔧 Deploying Backend...
♻️  Restarting lili-backend...
🎨 Deploying Frontend...
♻️  Restarting lili-frontend...
✅ Deployment Complete!
```

---

## 🔍 Troubleshooting

### Error: "Permission denied (publickey)"

**Solution:** Public key not added correctly to server

```bash
# SSH into server manually
ssh root@77.42.34.90

# Check authorized_keys
cat ~/.ssh/authorized_keys

# Make sure your public key is there
# If not, add it again
```

### Error: "Host key verification failed"

**Solution:** Server not in known_hosts

The workflow handles this automatically with `ssh-keyscan`, but if it fails:

```bash
# On your local machine
ssh-keyscan -H 77.42.34.90 >> ~/.ssh/known_hosts
```

### Error: "Invalid format"

**Solution:** Private key not copied correctly

- Make sure you copied the ENTIRE key including header and footer
- No extra spaces or line breaks
- Should start with `-----BEGIN OPENSSH PRIVATE KEY-----`
- Should end with `-----END OPENSSH PRIVATE KEY-----`

---

## 🎯 Quick Commands Reference

```bash
# Generate SSH key
ssh-keygen -t rsa -b 4096 -C "github-actions" -f lili_deploy

# View public key (add to server)
cat lili_deploy.pub

# View private key (add to GitHub)
cat lili_deploy

# Test SSH connection
ssh -i lili_deploy root@77.42.34.90

# Add public key to server
ssh-copy-id -i lili_deploy.pub root@77.42.34.90
```

---

## ✅ Success Indicators

After successful setup:

1. ✅ Secrets show in GitHub repository settings
2. ✅ Workflow runs without errors
3. ✅ All steps show green checkmarks
4. ✅ Sites are accessible:
   - https://lili-travel.xyz
   - https://admin.lili-travel.xyz

---

## 📝 Security Notes

- ✅ Never commit private keys to repository
- ✅ Use GitHub Secrets for sensitive data
- ✅ Private key is encrypted by GitHub
- ✅ Only workflow runs can access secrets
- ✅ Secrets are not exposed in logs

---

**🔐 Once secrets are added, your CI/CD pipeline will work automatically!**
