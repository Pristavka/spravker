import path from 'path';
import HtmlWebpackPligin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

const PATH = {
  SRC: path.join(__dirname, '/src'),
  DIST: path.join(__dirname, '/dist')
};

export default {
  entry: path.join(PATH.SRC, 'index.js'),
  output: {
    path: PATH.DIST,
    filename: 'bundle-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                localIdentName: '[local]',
                minimize: true,
                sourceMap: true
              }
            },
            { 
              loader: 'sass-loader',
              sourceMap: true
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer()]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPligin({
      template: path.join(PATH.SRC, '/index.html')
    }),
    new ExtractTextPlugin({
      filename: path.join(PATH.DIST, '/css/[name].bundle-[hash].css')
    })
  ]
};
