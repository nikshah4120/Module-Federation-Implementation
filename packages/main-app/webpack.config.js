var path=require('path');
var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const deps=require('./package.json').dependencies;
/* Automatic Vendor Federation Part
const AutomaticVendorFederation=require('@module-federation/automatic-vendor-federation');
const packageJson=require('./package.json');
const exclude = ["rimraf","express","g"];
const ignoreVersion=["react","react-dom"];
*/
module.exports = {
    mode: 'development',
    entry:"./src/index.js",
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist'),
     //publicPath: "https://dashboard-main-app.herokuapp.com/"
       publicPath: "http://localhost:8081/"
    },
    module:{
        rules:[
           {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use: {
                loader: 'babel-loader',
                options:{
                    presets: [
                       '@babel/preset-env',
                       '@babel/preset-react'
                    ]
                 }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use: ['css-loader','style-loader','sass-loader']
            },
            {
                test: /\.(jpe?g|svg|gif|png)$/i,
                use: 'file-loader'
            }
        ]
    },
      devServer:{
        contentBase: path.join(__dirname,"dist"),
       port: 8081
       },
      optimization: {
        splitChunks: {
         cacheGroups: {
             vendor:{
                test: /node_modules/,
                chunks: "initial",
                name: "vendor",
                enforce: true,
                maxSize: 300000,
                maxAsyncRequests: 6,
                maxInitialRequests: 4,
             }
        }
    }
      },
      plugins:[
        new htmlWebpackPlugin({
            template: path.resolve(__dirname,'public/index.html'),
            filename: 'index.html'
        }),
       new ModuleFederationPlugin({
            name:'app_contact',
            filename: 'remoteEntry.js',
            remotes:{
                app_home:'app_home@http://localhost:8080/remoteEntry.js',
                app_introduction: 'app_introduction@http://localhost:8082/remoteEntry.js'
            },
            exposes:{
               './AppContainer': './src/app'
            },
           /*  shared:{
                "react" : {
                   requiredVersion: deps.react,
                   singleton: true
               },
            }*/
            shared:['react','react-dom','react-router-dom']
         /*   shared: AutomaticVendorFederation({
            exclude,
            ignoreVersion,
            packageJson,
            shareFrom :["dependencies"],
            ignorePatchVersion: true,
         }),*/
        }),
        
    ],


}
