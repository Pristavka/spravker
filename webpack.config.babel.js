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
    filename: 'name.[hash].bundle.js'
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
                localIdentName: '[local]'
              }
            },
            { loader: 'sass-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer()]
              }
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPligin({ template: path.join(PATH.SRC, '/index.html') }),
    new ExtractTextPlugin('[name].[hash].bundle.css')
  ]
};
