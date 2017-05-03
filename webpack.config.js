var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
    // historyApiFallback: true
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'src/index.html'
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':
      JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
