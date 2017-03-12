const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		'./src/index.js',
	],
  	output: { path: __dirname, filename: 'bundle.js', publicPath: '/' },
  	plugins: [
  		new webpack.NoEmitOnErrorsPlugin(),
  		new webpack.optimize.OccurrenceOrderPlugin(),
  		new webpack.HotModuleReplacementPlugin()
  	],
  	module: {
	    rules: [
	      {
	        test: /\.jsx?$/,
	        exclude: /node_modules/,
	        use:[{
				loader:"react-hot-loader"
			},
			{
				loader:"babel-loader",
				options:{
					presets:[["es2015",{modules:false}],"react"]
			}

			}]
	        
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