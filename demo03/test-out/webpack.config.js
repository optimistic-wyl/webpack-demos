const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
//const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
module.exports = {
  devtool: 'eval',
  entry: {
    main: path.join(__dirname, 'main'),
    test1: path.join(__dirname, 'test1'),
    //test2: path.join(__dirname, 'test2')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',

    /**
     * 以下两个属性用于webpack的懒加载产生的chunk
     */
    // publicPath:
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      /* {
        test:/\.(css)$/,
        use:[
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      } */
      {
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: 'css-loader',
                options: {
                  
                }
              }
            ]
        })
      }

    ]
  },
  plugins:[
    //new CleanWebpackPlugin(['dist'],{root: path.join(__dirname,'./')}),
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      //hash: true,
      //filename:'index-2.html',
      template: path.join(__dirname, '', 'index.ejs'),
      title: 'Html Webpack Plugin-index',
      inject: false,
    }),
    new CleanWebpackPlugin(),
    /* new ExtractCssChunks({
      filename: './css/[name].[hash].css',
    }), */
    new ExtractTextPlugin({
        filename: './css/[name].[contenthash].css',
        // allChunks: true
    }), 
    //new ExtractTextPlugin("styles.css")
  ]
};
