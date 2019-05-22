let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].[chunkhash:8].js'
    //filename: '[name].js'
  },
  devtool: 'source-map',
  plugins:[
    new HtmlWebpackPlugin({
      //hash: true,
      template: path.join(__dirname, '', 'index.ejs'),
      chunks: ["bundle1"],
      title: 'Html Webpack Plugin',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      //hash: true,
      filename:'index-2.html',
      template: path.join(__dirname, '', 'index.ejs'),
      chunks: ["bundle2"],
      title: 'Html Webpack Plugin-index-2',
      inject: false,
    })
  ]
};
