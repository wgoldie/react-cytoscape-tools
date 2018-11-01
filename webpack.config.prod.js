const baseConfig = require('./webpack.config.base.js');

const config = {
  ...baseConfig,
  mode: 'production',
  output: {
    path: `${__dirname}/dist`,
    filename: 'react-cytoscape-tools.min.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};

module.exports = config;
