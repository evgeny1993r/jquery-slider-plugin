const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'slider-plugin.css',
  }),
];

if (process.env.NODE_ENV === 'development') {
  plugins.push(
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  );
}

module.exports = {
  entry: './src/index',

  plugins,

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  output: {
    filename: 'slider-plugin.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
