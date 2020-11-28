const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new WebpackAssetsManifest({
      output: 'manifest.json',
      space: 2,
      writeToDisk: false,
      replacer: require('./util/assetManifestsFormatter'),
    }),
  ],
});
