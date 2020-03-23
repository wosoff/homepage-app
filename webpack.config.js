const VIEWS = {
  HOME: 'views-home',
  ABOUT: 'views-about',
  PORTFOLIO: 'views-portfolio',
  TECH: 'views-tech'
}

const {resolve} = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {

    portfolio: resolve(__dirname, 'src', VIEWS.PORTFOLIO, 'index', 'portfolio.index.js'),
    home: resolve(__dirname, 'src', VIEWS.HOME, 'index', 'home.index.js'),
    tech: resolve(__dirname, 'src', VIEWS.TECH, 'index', 'tech.index.js'),

    // testView: resolve(__dirname, 'test', 'test.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'public','assets' , 'dist')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [
    new CopyPlugin([])
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ],
    // splitChunks: {
    //   chunks: 'all'
    // }
  },
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 5555,
  }
};