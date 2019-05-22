let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
//let rootPublic = path.resolve('./demo04/css');
let stylesLoader = 'css-loader!sass-loader?sourceMap=true&sourceMapContents=true';
//let stylesLoader = 'css-loader';

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      /* {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      } , */
      {
        test:/\.(scss|sass|css)$/,
        use:ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: stylesLoader
        })
      }
      /* {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      } */
    ]
  },
   plugins:[
    new HtmlWebpackPlugin({
      //hash: true,
      //filename:'index-2.html',
      template: path.join(__dirname, '', 'index.ejs'),
      title: 'Html Webpack Plugin-index',
      inject: false,
    }),
    new ExtractTextPlugin({
        filename: 'css-compile/style.css',
        allChunks: true
    }), 
    //new ExtractTextPlugin("styles.css")
  ]
}; 

/* module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
}; */