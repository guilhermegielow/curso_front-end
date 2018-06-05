const path = require('path');

module.exports = {
	  entry: ['babel-polyfill', './src/renderer.js'],
	  output: {
		      filename: 'bundle.js',
		      path: path.resolve(__dirname, 'electron'),
              libraryTarget: "commonjs"
		    },
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: [
						'es2015',
						'stage-0'
					]
				}
			}
		]
	}
};

