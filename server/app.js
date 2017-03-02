const PORT = process.env.PORT || 3000;
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import  webpackConfig from '../webpack.config.js';

const app = express();
	
//WEBPACK CONFIG
app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('*', (req, res) => {
  let indexPath = path.join(__dirname, '../index.html');
  res.sendFile(indexPath);
});

//SERVER LISTEN
app.listen(PORT, err => {
  if(err) throw err;

  console.log(`Server listening at http://localhost:${PORT}`);
});