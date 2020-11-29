const path = require('path');
const json = require('json');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const plugins = {
  CleanWebpackPlugin: require('clean-webpack-plugin'),
  HtmlWebpackPlugin: require('html-webpack-plugin'),
};

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
      },
      {
        test: /\.(s)?css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.json$/i,
        type: 'json',
        parser: {
          parse: json.parse,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new plugins.HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
  ],
};
