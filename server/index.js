
var express = require('express');
var logger = require('./logger');

var argv = require('minimist')(process.argv.slice(2));

var isDev = process.env.NODE_ENV !== 'production';
var ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;

var path = require('path');

var staticFilesPath = path.resolve('./');
//using express
var app = express();



app.use(express.static(path.join(staticFilesPath)));

app.use(function(req, res) {
  return res.sendFile(`${staticFilesPath}/index.html`);
});
// get the intended port number, use port 3000 if not provided
var port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, function(err) {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, function(innerErr, url) {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
    });
  } else {
    logger.appStarted(port);
  }
});
