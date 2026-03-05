#!/bin/bash
cat > /etc/nginx/sites-available/lili-travel.xyz << 'ENDCONFIG'
server {
    server_name lili-travel.xyz www.lili-travel.xyz;
    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/lili-travel.xyz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/lili-travel.xyz/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = www.lili-travel.xyz) {
        return 301 https://$host$request_uri;
    }

    if ($host = lili-travel.xyz) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name lili-travel.xyz www.lili-travel.xyz;
    return 404;
}
ENDCONFIG

nginx -t && systemctl reload nginx
