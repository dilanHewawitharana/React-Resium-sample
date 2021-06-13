const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// The path to the CesiumJS source code
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),

        // Needed to compile multiline strings in Cesium
        sourcePrefix: ''
    },
    amd: {
        // Enable webpack-friendly use of require in Cesium
        toUrlUndefined: true
    },
    // node: {
    //     // Resolve node module use of fs
    //     fs: 'empty'
    // },
    resolve: {
        alias: {
            // CesiumJS module name
            cesium: path.resolve(__dirname, cesiumSource)
        }
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
            use: [ 'url-loader' ]
        },
        {
            // Strip cesium pragmas
            test: /\.js$/,
                enforce: 'pre',
                include: path.resolve(__dirname, cesiumSource),
                use: [{
                    loader: 'strip-pragma-loader',
                    options: {
                        pragmas: {
                            debug: false
                        }
                    }
                }]
        },
        // {
        //     test: /\.css$/,
        //     use: [
        //         'style-loader',
        //         {
        //             loader: 'css-loader',
        //             options: {
        //                 // minify loaded css
        //                 minimize: true
        //             }
        //         }
        //     ]
        // }
        ]
    },
    devtool: 'eval',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'cesium',
        //     minChunks: module => module.context && module.context.indexOf('cesium') !== -1
        // }),
        // Copy Cesium Assets, Widgets, and Workers to a static directory
        new CopywebpackPlugin({ 
            patterns: [
                { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
                { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
                { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' }
            ]
        }),
        new webpack.DefinePlugin({
            // Define relative base path in cesium for loading assets
            CESIUM_BASE_URL: JSON.stringify('')
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist")
    }
};