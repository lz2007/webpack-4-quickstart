const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production'
    return {
        entry: [
            path.join(__dirname, './src/main.js')
        ],
        module: {
            rules: [{
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {}
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.styl$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'stylus-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: "html-loader",
                        options: {
                            attrs: ['img:src', 'img:data-src', 'audio:src'],
                            minimize: true
                        }
                    }]
                },
                {
                    test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            minimize: true,
                            name: '[name].[ext]',
                            publicPath: "./images/",
                            outputPath: "images/"
                        }
                    }]
                }
            ]
        },
        resolve: {
            //配置别名，在项目中可缩减引用路径
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve('src'),
                '&': path.resolve('src/components')
            }
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./public/index.html",
                filename: "./index.html"
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new VueLoaderPlugin()
        ],

        devServer: {
            proxy: {
                '/gmvcs': 'http://192.168.55.156:8201'
            }
        }
    }
}