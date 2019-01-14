module.exports = {
  entry: ['./src/index.js'],
  output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/,
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  mode: 'production'
};