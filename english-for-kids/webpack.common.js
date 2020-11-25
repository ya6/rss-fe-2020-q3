const path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: false,
  entry: { main: "./src/index.js",
  },
 
  module: {
    rules: [
      
        {test: /\.html$/i, use: ['html-loader']},

        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            loader: 'file-loader',
            options: {
                publicPath: 'assets/imgs',
                outputPath: 'assets/imgs',
                name: '[name].[ext]'
            },
          },

    ]
},

plugins:[new HtmlWebpackPlugin({
    title: 'My App',
    template: './src/template.html'
  })] 

};