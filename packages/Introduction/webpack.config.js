var path=require('path');
var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const deps=require('./package.json').dependencies;
/* Automatic Vendor Federation Part
const AutomaticVendorFederation=require('@module-federation/automatic-vendor-federation');
const packageJson=require('./package.json');
const exclude=["g","rimraf","express","file-loader"];
const ignoreVersion=["react","react-dom"];
*/
module.exports = {
    mode: 'development',
    entry:"./src/index.js",
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist'),
       publicPath: "http://localhost:8082/",
     //   publicPath: "https://dashboard-introduction.herokuapp.com/"
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
       port: 8082
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
            name:'app_introduction',
            filename:'remoteEntry.js',
            exposes:{
             './AppContainer':'./src/app',
             './Navigation':'./src/component/navmenu',
             './Mod': './src/component/modal'
            },
            remotes:{
                app_contact:'app_contact@http://localhost:8081/remoteEntry.js',
                app_home: 'app_home@http://localhost:8080/remoteEntry.js'
            },
            shared:['@material-ui/core','@material-ui/icons','react','react-dom','react-router-dom'],
           /* shared:{
               "@material-ui/core": {
                 requiredVersion: deps.@material-ui/core,
               },
               "@material-ui/icons": {
                 requiredVersion: deps.@material-ui/icons,
               },
               "react" : {
                   requiredVersion: deps.react,
                   singleton: true
               },
               "react-dom":{
                   requiredVersion:deps.react-dom,
                   singleton: true
               }
            }
           */
            /* shared: AutomaticVendorFederation({
               exclude,
               ignoreVersion,
               packageJson,
               shareFrom: ["dependencies"],
               ignorePatchVersion: true,
            }),*/
        }),
        
    ],


}