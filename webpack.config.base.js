const path = require('path');
const nodeExternals = require('webpack-node-externals');
/*
 * Abstract base config.
 * Not for actual use.
 */
const config = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.jsx'],
  },
  externals: [nodeExternals()],
};

module.exports = config;
