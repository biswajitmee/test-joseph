const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // Your source HTML file
    }),
  ],
};
