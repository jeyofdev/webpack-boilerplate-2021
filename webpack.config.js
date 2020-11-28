const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const plugins = {
  CleanWebpackPlugin: require('clean-webpack-plugin'),
  HtmlWebpackPlugin: require('html-webpack-plugin'),
};

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new plugins.HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
  ],
};
