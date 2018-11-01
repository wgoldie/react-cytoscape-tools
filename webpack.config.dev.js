const baseConfig = require('./webpack.config.base.js');

const config = {
  ...baseConfig,
  mode: 'development',
  output: {
    path: `${__dirname}/dist`,
    filename: 'react-cytoscape-tools.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};

module.exports = config;
