const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  return {
    entry: './index.js',
    mode: env.mode,
    devtool: env.mode === 'development' ? 'inline-source-map' : 'source-map',
    devServer: {
      historyApiFallback: true,
    },
    output: {
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, '../../build'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new Dotenv(),
    ],
    resolve: {
      modules: [path.resolve(__dirname, '../../'), 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
  };
};
