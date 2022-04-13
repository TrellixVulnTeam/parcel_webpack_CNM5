const webpack = require('webpack')
const miniCss = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   mode: 'development',
   entry: './src/main.js',
   output: {
      filename: 'dist.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/images/[name][hash][ext]'
   },
   devServer: {
      port: 5005,
      static: './public',
      hot: true
   },
   module: {
      rules: [
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.(s*)css$/, use: [
               miniCss.loader,
               'css-loader',
               'sass-loader']
         },
         {
            test: /\.html$/,
            loader: 'html-loader'
         }
      ]
   },
   plugins: [
      new miniCss({
         filename: 'styles.css',
      }),
      new HtmlWebpackPlugin({
         template: 'src/index.html'
      })
   ]
}
