# 🔐 ADD THESE SECRETS TO GITHUB NOW

## ⚡ Quick Action Required

I've generated the SSH keys for you. Follow these 3 steps:

---

## STEP 1: Add Public Key to Server

**Copy this command and run it in your SSH terminal (root@77.42.34.90):**

See the public key in: `lili_deploy.pub`

```bash
# SSH into server
ssh root@77.42.34.90

# Add the public key (copy from lili_deploy.pub file)
echo "YOUR_PUBLIC_KEY_FROM_FILE" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
exit
```

---

## STEP 2: Add Secrets to GitHub

### 🔗 Click this link:
**https://github.com/Shahil-AppDev/lilitravel/settings/secrets/actions/new**

### Secret #1: SERVER_IP

```
Name: SERVER_IP
Value: 77.42.34.90
```

Click **Add secret**

---

### Secret #2: SSH_PRIVATE_KEY

**🔗 Click:** https://github.com/Shahil-AppDev/lilitravel/settings/secrets/actions/new

```
Name: SSH_PRIVATE_KEY
Value: [Copy ENTIRE content from lili_deploy file]
```

**Important:** Copy the ENTIRE private key including:
- `-----BEGIN OPENSSH PRIVATE KEY-----`
- All the key content
- `-----END OPENSSH PRIVATE KEY-----`

Click **Add secret**

---

## STEP 3: Trigger Deployment

After adding both secrets, trigger the workflow:

**🔗 Click:** https://github.com/Shahil-AppDev/lilitravel/actions/workflows/deploy-safe.yml

Then click **Run workflow** → Select **master** → **Run workflow**

---

## ✅ Verification

After workflow completes:
- Frontend: https://lili-travel.xyz
- Backend: https://admin.lili-travel.xyz

---

**Files created:**
- `lili_deploy.pub` - Public key (add to server)
- `lili_deploy` - Private key (add to GitHub)

**⚠️ IMPORTANT:** Delete these files after adding to GitHub for security!
