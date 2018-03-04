const path = require('path');
const fs = require('fs');

const nodeModules = fs.readdirSync('node_modules').reduce((acc, mod) => {
  if (mod === '.bin') {
    return acc;
  }
  acc[mod] = `commonjs ${mod}`;
  return acc;
}, {});

const productionConfig = {
  app: {
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
  },
  server: {
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
  },
};

module.exports = (env) => {
  console.log(env);

  if (env.production) {
    switch (env.src) {
      case 'app':
        return productionConfig.app;
      case 'server':
        return productionConfig.server;
      case 'all':
        return [productionConfig.app, productionConfig.server];
      default:
        console.error(`Unknown webpack environment ${env}`);
    }
  } else {
    console.error(`Unknown webpack environment ${env}`);
    return {};
  }
  return {};
};
