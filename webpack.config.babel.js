import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default [
	{
		entry: {
			js: './src/client.js',
		},
		output: {
			path: path.join(__dirname, 'src', 'static', 'js'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					test: path.join(__dirname, 'src'),
					use: {
						loader: 'babel-loader',
						options: 'cacheDirectory=.babel_cache',
					}
				},
				{
					test: /\.scss$/,
					use: [
					  {
						loader: "style-loader" // creates style nodes from JS strings
					  },
					  {
						loader: "css-loader" // translates CSS into CommonJS
					  },
					  {
						loader: "sass-loader" // compiles Sass to CSS
					  }
					]
				}
			]
		}
	},
	{
		target: 'node',
		node: {
			__dirname: false,
		},
		externals: [nodeExternals({
			modulesFromFile: true,
		})],
		entry: {
			js: './src/server.js',
		},
		output: {
			path: path.join(__dirname, 'src'),
			filename: 'server-prod.js',
			libraryTarget: 'commonjs2',
		},
		module: {
			rules: [
				{
					test: path.join(__dirname, 'src'),
					use: {
						loader: 'babel-loader',
						options: 'cacheDirectory=.babel_cache',
					}
				}
			]
		}
	}
];