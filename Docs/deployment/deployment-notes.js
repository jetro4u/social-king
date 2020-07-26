
Purchasing New Domain:
Point NameCheap domain to these 'Custom DNS' records:
anna.ns.cloudflare.com
odin.ns.cloudflare.com

-------------
Test URL: for testing Admin Backend API:
https://amazonfashion.app/?hmac=c2c9d31498c7c35c61c641d710ac056ee22b254661c542a4691ba38ac6f105f8&locale=en-IL&session=dd775cbcbd2e2bafa2afb0eb0d69967fa0772d73fea5debf47238d83984b1ddb&shop=jungle-navigator.myshopify.com&timestamp=1594618055

location /api {
     proxy_pass http://localhost:8000;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection 'upgrade';
     proxy_set_header Host $host;
     proxy_cache_bypass $http_upgrade;
}

location / {
     proxy_pass http://localhost:3000;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection 'upgrade';
     proxy_set_header Host $host;
     proxy_cache_bypass $http_upgrade;
}

location /proxy {
     proxy_pass http://localhost:7777;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection 'upgrade';
     proxy_set_header Host $host;
     proxy_cache_bypass $http_upgrade;
}


mongodb://root:leeshtime83@ds147446.mlab.com:47446/amazon-tech-app
ssh root@208.68.37.181

mongodb://root:leeshtime83@ds147599.mlab.com:47599/amazon-fashion-app
ssh root@67.205.136.120


socialking.app
ssh root@67.205.168.42

password: BazookaB42B

2) Setup nginx
sudo apt update
sudo apt install nginx

cd /etc/nginx/sites-available
sudo vim default
//check that all is good
sudo nginx -t
sudo systemctl restart nginx

3) Install nodemon
npm install nodemon -g

4) Starting PM2:
cd Admin-Backend
pm2 start server.js 

cd Admin-Frontend
pm2 start npm -- start (starts the 'npm start' script)

cd Proxy
pm2 start start.js

5) Restarting Servers

cd Admin-Backend
pm2 restart server.js 

cd Admin-Frontend

pm2 restart npm -- start (starts the 'npm start' script)

cd Proxy
pm2 restart start.js