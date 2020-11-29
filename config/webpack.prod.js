const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const plugins = {
  WebpackAssetsManifest: require('webpack-assets-manifest'),
  MiniCssExtractPlugin: require('mini-css-extract-plugin'),
};

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'assets/js/[name].[contenthash].js',
    publicPath: '/dist/',
    chunkFilename: '[id].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(s)?css$/i,
        use: [
          plugins.MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new plugins.WebpackAssetsManifest({
      output: 'manifest.[hash].json',
      space: 2,
      writeToDisk: false,
      replacer: require('./util/assetManifestsFormatter'),
    }),
    new plugins.MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
});
