import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
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
				},
			},
		],
	},
};