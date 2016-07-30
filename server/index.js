const app = require('./config')();
const routes = require('./api');
const path = require('path');
const cache = require('./models/cache');
const controller = require('./models/controller');

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config.dev');

  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

cache.getCache('./main');
app.use('/api', routes);
app.get('/search/:value', function(req, res) {
  controller.getInfo(req, res);
})
app.get("/*", function(req, res) {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

module.exports = app;
