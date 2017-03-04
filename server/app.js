const PORT = process.env.PORT || 3000;
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import  webpackConfig from '../webpack.config.js';

const app = express();
const compiler = webpack(webpackConfig);
	
//WEBPACK CONFIG
app.use(webpackMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  let indexPath = path.join(__dirname, '../index.html');
  res.sendFile(indexPath);
});

//SERVER LISTEN
app.listen(PORT, err => {
  if(err) throw err;

  console.log(`Server listening at http://localhost:${PORT}`);
});