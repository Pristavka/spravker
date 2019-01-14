import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPligin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import autoprefixer from 'autoprefixer';

const PATH = {
    SRC: path.join(__dirname, '/src'),
    DIST: path.join(__dirname, '/dist')
};

export default {
    mode: 'development',
    entry: path.join(PATH.SRC, 'index.js'),
    output: {
        path: PATH.DIST,
        filename: '[name].[hash].bundle.js'
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        compress: true,
        hot: true,
        https: false,
        open: true,
        port: process.env.PORT || 7000,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    context: __dirname,
    resolve: {
        modules: ['node_modules', path.resolve(PATH.SRC)],
        extensions: ['.js', '.jsx', '.json', '.scss', '.css']
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // TODO: Update MiniCssExtractPlugin when it will be support HMR
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]--[hash:base64]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { plugins: [autoprefixer()] }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: { name: 'img/[name].[ext]' }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([PATH.DIST]),
        new HtmlWebpackPligin({ template: path.join(PATH.SRC, '/index.html') }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].bundle.css',
            chunkFilename: '[id].[hash].bundle.css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
