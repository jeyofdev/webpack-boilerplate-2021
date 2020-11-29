const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const plugins = {
  StylelintPlugin: require('stylelint-webpack-plugin'),
  ESLintPlugin: require('eslint-webpack-plugin'),
};

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new plugins.StylelintPlugin({
      files: '**/*.scss',
    }),
    new plugins.ESLintPlugin(),
  ],
});
