const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
  	output: { path: __dirname, filename: 'bundle.js' },
  	module: {
	    rules: [
	      {
	        test: /\.jsx?$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/,
	        query: {
	          presets: ['es2015', 'react']
	        }
	      }
	    ]
  	},
};


// import path from 'path';
// import webpack from 'webpack';

// export default {
// 	entry: './src/index.js',
// 	output: { path: __dirname, filename: 'bundle.js' },
//  	module: {
//     	rules: [
// 	      {
// 	        test: /\.jsx?$/,
// 	        loader: 'babel-loader',
// 	        exclude: /node_modules/,
// 	        query: {
// 	          presets: ['es2015', 'react']
// 	        }
// 	      }
// 	    ]
// 	},
// 	resolve: {
// 		extentions: ['.js']
// 	}
// }