#!/bin/bash
################################################################################
# Lili Travel - Nginx & SSL Setup Script
# Execute this on the server: bash setup-nginx-ssl.sh
################################################################################

set -e

echo "🔧 Configuration Nginx et SSL pour Lili Travel"
echo "================================================"

# 1. Configurer Nginx pour le frontend
echo "📝 Création de la configuration Nginx pour le frontend..."
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

# 2. Configurer Nginx pour le backend
echo "📝 Création de la configuration Nginx pour le backend..."
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

# 3. Activer les sites
echo "🔗 Activation des sites Nginx..."
sudo ln -sf /etc/nginx/sites-available/lili-travel.xyz /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/admin.lili-travel.xyz /etc/nginx/sites-enabled/

# 4. Tester la configuration Nginx
echo "✅ Test de la configuration Nginx..."
sudo nginx -t

# 5. Recharger Nginx
echo "🔄 Rechargement de Nginx..."
sudo systemctl reload nginx

# 6. Installer Certbot si nécessaire
echo "📦 Installation de Certbot..."
sudo apt update > /dev/null 2>&1
sudo apt install -y certbot python3-certbot-nginx > /dev/null 2>&1

# 7. Installer SSL pour le frontend
echo "🔐 Installation du certificat SSL pour lili-travel.xyz..."
sudo certbot --nginx -d lili-travel.xyz -d www.lili-travel.xyz \
    --non-interactive --agree-tos --email admin@lili-travel.xyz --redirect

# 8. Installer SSL pour le backend
echo "🔐 Installation du certificat SSL pour admin.lili-travel.xyz..."
sudo certbot --nginx -d admin.lili-travel.xyz \
    --non-interactive --agree-tos --email admin@lili-travel.xyz --redirect

# 9. Vérifier le renouvellement automatique
echo "🔄 Configuration du renouvellement automatique..."
sudo certbot renew --dry-run

# 10. Afficher le statut
echo ""
echo "════════════════════════════════════════════════════════"
echo "✅ Configuration terminée avec succès!"
echo "════════════════════════════════════════════════════════"
echo ""
echo "🌐 Vos sites sont maintenant accessibles:"
echo "   Frontend: https://lili-travel.xyz"
echo "   Backend:  https://admin.lili-travel.xyz"
echo ""
echo "📊 Statut PM2:"
pm2 list | grep lili-
echo ""
echo "🔐 Certificats SSL installés et configurés"
echo "🔄 Renouvellement automatique activé"
echo ""
echo "════════════════════════════════════════════════════════"
