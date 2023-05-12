const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlagin = require('copy-webpack-plugin');

const mode = process.env.MODE_ENV || 'development';
const devMode = mode === 'development';
const target = 'devMode' ? 'web' : 'browserlist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: '[name].[contenthash:10].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 9000,
        open: true,
        hot: true,
        // static: {
        //     directory: path.join(__dirname, './dist'),
        // },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        // new CopyWebpackPlagin({
        //     patterns: [
        //         {
        //             from: 'img',
        //             to: 'img'
        //         },
        //         {
        //             from: path.resolve(__dirname, 'src/favicon.ico'),
        //             to: path.resolve(__dirname, 'dist')
        //         }
        //     ]
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:10].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')],
                            },
                        },
                    },
                    'group-css-media-queries-loader',
                    {
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                use: devMode
                    ? []
                    : [
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: [0.65, 0.9],
                                    speed: 4,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                webp: {
                                    quality: 75,
                                },
                            },
                        },
                    ],
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ]
    }
};