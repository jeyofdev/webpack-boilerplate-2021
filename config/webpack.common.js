const path = require('path');
const webpack = require('webpack');
const json = require('json');
const svgToMiniDataURI = require('mini-svg-data-uri');

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
    filename: 'assets/js/[name].js',
    publicPath: '/',
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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[contenthash][ext][query]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[contenthash][ext][query]',
        },
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
        generator: {
          dataUrl: (content) => {
            content = content.toString();
            return svgToMiniDataURI(content);
          },
        },
      },
      {
        test: /\.json$/i,
        type: 'json',
        parser: {
          parse: json.parse,
        },
      },
      { test: /\.html$/, loader: 'html-loader' },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new CleanWebpackPlugin(),
    new plugins.HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
