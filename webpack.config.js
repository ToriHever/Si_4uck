const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        news: './src/pagers/news/news.js',
        historyGames: './src/pagers/historyGames/historyGames.js',
        Trailers: './src/pagers/Trailers/Trailers.js',
        Reviews: './src/pagers/Reviews/Reviews.js',
        authentication: './src/pagers/authentication/authentication.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@js': path.resolve(__dirname, 'src/js/'),
            '@media': path.resolve(__dirname, 'src/styles/media'),
            '@buttons': path.resolve(__dirname, 'src/styles/buttons'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: './src/index.html',
            minify: {
                collapseWhitespace: false,
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: './src/pagers/news/news.html',
            minify: {
                collapseWhitespace: false,
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'historyGames.html',
            template: './src/pagers/historyGames/historyGames.html',
            minify: {
                collapseWhitespace: false,
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'Trailers.html',
            template: './src/pagers/Trailers/Trailers.html',
            minify: {
                collapseWhitespace: false,
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'Reviews.html',
            template: './src/pagers/Reviews/Reviews.html',
            minify: {
                collapseWhitespace: false,
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'authentication.html',
            template: './src/pagers/authentication/authentication.html',
            minify: {
                collapseWhitespace: false,
            }
        }),

        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets'),
                    to: path.resolve(__dirname, './dist/assets'),
                }
      ],
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),

        new CleanWebpackPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
            },
                    'css-loader'
                ]
            },

            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
        },
            {
                test: /\.xml$/,
                use: ['xml-loader']
        },
            {
                test: /\.csv$/,
                use: ['csv-loader']
        },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
            },
                    'css-loader',
                    'less-loader'
                ]
        },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
        ],
      },
            {
                test: /\.txt$/i,
                use: 'raw-loader',
      },

    ]
    }
}
