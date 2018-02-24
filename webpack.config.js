const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || 'development';

const PATHS = {
  app: path.join(__dirname, 'src', 'index.jsx'),
  template: path.join(__dirname, 'src', 'index.html'),
  assets: path.join(__dirname, 'src', 'assets'),
  build: path.join(__dirname, 'build')
};

const commonConfig = {
  entry: {
    app: ['babel-polyfill', PATHS.app]
  },
  resolve: {
    modules: [PATHS.app, 'node_modules'],
    extensions: ['.js', '.jsx', '.scss']
  },
  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].[chunkhash].js',
    path: PATHS.build,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CV',
      template: PATHS.template
    }),
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css-loader'])
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(svg|png)$/,
        loader: 'url-loader',
      }
    ]
  }
};

const devConfig = {
  devServer: {
    contentBase: PATHS.assets,
    stats: 'errors-only',
    overlay: {
      errors: true,
      warnings: true
    }
  }
};

const productionConfig = {
  plugins: [
    new CopyWebpackPlugin([{
      from: path.join(PATHS.assets, 'pics', 'profile-pic.jpg'),
      to: path.join(PATHS.build, 'pics', 'profile-pic.jpg')
    }]),
    new UglifyWebpackPlugin()
  ]
};

module.exports = env => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, devConfig);
}
