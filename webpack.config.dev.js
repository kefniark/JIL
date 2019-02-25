const path = require("path");

module.exports = {
	entry: './src/library/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: 'jil',
		libraryExport: 'default',
		libraryTarget: 'umd'
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "ts-loader" }
		]
	},
	mode: "development",
	devtool: 'source-map'
};
