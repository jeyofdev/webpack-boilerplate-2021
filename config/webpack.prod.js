const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const WebpackAssetsManifest = require('webpack-assets-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(s)?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new WebpackAssetsManifest({
      output: 'manifest.json',
      space: 2,
      writeToDisk: false,
      replacer: require('./util/assetManifestsFormatter'),
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
