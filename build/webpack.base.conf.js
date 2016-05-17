var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './docs/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?v=[0-9\.]+)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap&-minimize!postcss-loader!less?sourceMap'
        )
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: {
      // apply babel transform to all javascript
      // inside *.vue files.
      md: 'html!vue-antd-docs',
      js: 'babel'
      // less: ExtractTextPlugin.extract(
      //   'css?sourceMap&-minimize!' + 'postcss-loader!' + 'less?sourceMap'
      // )
    }
  }
}
