var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://0.0.0.0:4001',
    'webpack/hot/only-dev-server'
  ],

  output: {
    path: '/',
    filename: 'bundle.js'
  },

  devServer: {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './public',
    proxy: {
        "**": "http://localhost:4000"
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['react-hot-loader/webpack', 'babel-loader?' + JSON.stringify({
          presets: ['es2015', 'react', 'stage-0']
        })],
        exclude: /node_modules/,
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  mode: 'development'
};
