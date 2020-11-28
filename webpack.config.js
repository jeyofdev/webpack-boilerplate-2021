const path = require('path');

const plugins = {
  htmlWebpackPlugin: require('html-webpack-plugin'),
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
    new plugins.htmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'app.html',
    }),
  ],
};
