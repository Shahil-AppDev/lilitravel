#!/bin/bash
################################################################################
# Lili Travel - Frontend Diagnostic Script
# Execute this on the server: bash test-frontend.sh
################################################################################

set -e

echo "🔍 LILI TRAVEL - FRONTEND DIAGNOSTIC"
echo "======================================"

echo ""
echo "1️⃣  Checking PM2 processes..."
pm2 list | grep lili

echo ""
echo "2️⃣  Checking if port 5173 is listening..."
netstat -tlnp | grep 5173 || echo "❌ Port 5173 not listening"

echo ""
echo "3️⃣  Testing local connection..."
curl -I http://localhost:5173 || echo "❌ Local connection failed"

echo ""
echo "4️⃣  Getting HTML content..."
curl -s http://localhost:5173 | head -10

echo ""
echo "5️⃣  Checking dist files..."
ls -la /opt/projects/lili-travel/dist/

echo ""
echo "6️⃣  Checking if JS files exist..."
ls -la /opt/projects/lili-travel/dist/assets/ | head -5

echo ""
echo "7️⃣  Testing JS file access..."
curl -I http://localhost:5173/assets/index-*.js || echo "❌ JS file not accessible"

echo ""
echo "8️⃣  Frontend logs..."
pm2 logs lili-frontend --lines 20 --nostream

echo ""
echo "9️⃣  Nginx frontend error logs..."
sudo tail -n 20 /var/log/nginx/lili-travel-frontend-error.log || echo "❌ Cannot access Nginx logs"

echo ""
echo "🔟  Nginx frontend access logs..."
sudo tail -n 10 /var/log/nginx/lili-travel-frontend-access.log || echo "❌ Cannot access Nginx access logs"

echo ""
echo "✅ Diagnostic complete!"
echo ""
echo "🌐 Test URLs:"
echo "   Local: http://localhost:5173"
echo "   External: https://lili-travel.xyz"
echo "   Backend: https://admin.lili-travel.xyz"
