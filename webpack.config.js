const path = require('path');

// 设置node.js环境变量 development  production
process.env.NODE_ENV = 'production';

module.exports = {
  entry: './main.ts',
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    // 配置省略文件路径的后缀名
    extensions: ['.vue', '.tsx', '.ts', '.js'],
  },
  mode: 'production',
  devtool: 'source-map',
};
