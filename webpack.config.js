 var HtmlWebpackPlugin = require('html-webpack-plugin');
 var ExtractTextPlugin = require('extract-text-webpack-plugin');
 var path = require('path')
 var webpack = require('webpack')
 module.exports = {
     entry: './src/app.js',
     output: {
         path: path.resolve(__dirname,'./dist'),
         filename: 'app.bundle.js',
     },
     module: {
         rules: [
             {
                 test: /\.scss$/, 
                 use: ['style-loader','css-loader','sass-loader']
             }
         ]
     },
     devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true, //gZip
        port: 9000,
        stats: "errors-only",
        open: true,
        hot: true,
     },
     /*plugins: [new HtmlWebpackPlugin()]*/
     plugins: [
         new HtmlWebpackPlugin({
            title: 'template',
            minify: {
                collapseWhitespace: true

            },
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'styles.css',
            disabled: true,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
     ]
 }