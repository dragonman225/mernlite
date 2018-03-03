const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./src/app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'react',
            ],
          ],
        },
      },
    }],
  },
};
