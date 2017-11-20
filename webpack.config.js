const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: ['babel-polyfill', 'react-hot-loader/patch', './root.js'],
        style: ['./style.css']
    },
    output: {
        path: __dirname + "public/",
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: __dirname + "/public/",
        inline: true,
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.json$/,
            loader: 'json-loader'
        },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }),
                include: path.join(__dirname, './src/style.css')
            }, {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules(?!\/webpack-dev-server)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0'],
                        cacheDirectory: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            appMountId: 'app'
        }),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin('[name].css')
    ],
    resolve: {
        extensions: ['.js', '.json']
    }
};

module.exports = config;
