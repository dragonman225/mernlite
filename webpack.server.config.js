const path = require('path');
const fs = require('fs');

const nodeModules = fs.readdirSync('node_modules').reduce((acc, mod) => {
  if (mod === '.bin') {
    return acc;
  }
  acc[mod] = `commonjs ${mod}`;
  return acc;
}, {});

module.exports = {
  target: 'node',
  externals: nodeModules,
  mode: 'production',
  entry: ['babel-polyfill', './src/server/server.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
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
              'env',
              {
                targets: { node: 7 },
                useBuiltIns: true,
              },
            ],
          ],
        },
      },
    }],
  },
};
