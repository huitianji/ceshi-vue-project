// https://github.com/shelljs/shelljs
require('shelljs/global');
env.NODE_ENV =  process.env.NODE_ENV || 'production'

var fs = require('fs')
var path = require('path')
var argv = require('optimist').argv
var express = require('express')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var opn = require('opn')
var app = express()
var port = process.env.PORT || config.build.port
var apiRootPath = require('../config/test.env').apiRootPath;

// proxy api requests
if (argv.proxy) {
  app.use(JSON.parse(apiRootPath), proxyMiddleware({target: 'http://' + argv.proxy}));
}
// mock api requests
else {
  let mockDir = path.resolve(__dirname, '../mock');
  (function setMock(mockDir) {
    fs.readdirSync(mockDir).forEach(function (file) {
      var filePath = path.resolve(mockDir, file);
      var mock;
      if (fs.statSync(filePath).isDirectory()) {
        setMock(filePath);
      }
      else {
        if (/\.js$/.test(file)) {
          mock = require(filePath);
          app.use(mock.api, mock.response);
        }
      }
    });
  })(mockDir);
}

// serve pure static assets
var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
app.use(staticPath, express.static(path.resolve(__dirname, '../dist/static')))

app.use(function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'), {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8'
    }
  });
});

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Build server listening at ' + uri + '\n')
  opn(uri)
})