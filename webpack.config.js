 var HtmlWebpackPlugin = require('html-webpack-plugin');
 var ExtractTextPlugin = require('extract-text-webpack-plugin');
 var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
 var path = require('path')
 var webpack = require('webpack')

 var isProduction = process.env.NODE_ENV === 'production';
 var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
 var cssProd = ExtractTextPlugin.extract({
     fallback: 'style-loader',
     use: ['css-loader', 'sass-loader'],
     publicPath: '/dist'
 })


 var cssConfig = isProduction ? cssProd : cssDev;
 module.exports = {
     entry: './src/app.js',
     output: {
         path: path.resolve(__dirname, './dist'),
         filename: 'app.bundle.js',
     },
     module: {
         rules: [{
             test: /\.scss$/,
             use: cssConfig
         }]
     },
     devServer: {
         contentBase: path.join(__dirname, "dist"),
         compress: true, //gZip
         port: 9000,
         stats: "errors-only",
         hot: true
/*         open: true*/
     },
     plugins: [
         new BrowserSyncPlugin(
             // BrowserSync options 
             {

                 host: 'localhost',
                 port: 8000,
                 // proxy the Webpack Dev Server endpoint 

                 // through BrowserSync 
                 proxy: 'http://localhost:9000/',
                 ui: {
                     port: 7000
                 }
             },
             // plugin options 
             {
                 // prevent BrowserSync from reloading the page 
                 // and let Webpack Dev Server take care of this reload:false

                 reload: false
             }
         ),
         new HtmlWebpackPlugin({
             title: 'Plug N Play',
             minify: {
                 collapseWhitespace: true

             },
             hash: true,
             template: './src/index.html'
         }),
         new ExtractTextPlugin({
             filename: 'styles.css',
             disable: !isProduction,
             allChunks: true
         }),
         new webpack.HotModuleReplacementPlugin(),
         new webpack.NamedModulesPlugin()
     ]
 }