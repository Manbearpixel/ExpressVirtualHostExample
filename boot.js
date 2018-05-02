const express = require('express');
const http    = require('http');
const vhost   = require('vhost');

function createVirtualHost(domainName, dirPath) {
  console.log(`>> Create VHOST for: ${domainName} -- ./${dirPath}/app`);
  return vhost(domainName, require(`./${dirPath}/app`));
}

let app = express();

let dashboardHost = createVirtualHost('dash.example.com', 'dash');
let adminHost     = createVirtualHost('admin.example.com', 'admin');
let appHost       = createVirtualHost('prototype.example.com', 'proto');

app.use(dashboardHost);
app.use(adminHost);
app.use(appHost);

let port = 80;
app.listen(port, () => {
  console.log(`Listening on port ${port} in ${app.settings.env} mode`);
});
