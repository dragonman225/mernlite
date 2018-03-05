const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const nodeModules = fs.readdirSync('node_modules').reduce((acc, mod) => {
  if (mod === '.bin') {
    return acc;
  }
  acc[mod] = `commonjs ${mod}`;
  return acc;
}, {});

const developmentConfig = {
  app: {
    mode: 'development',
    entry: {
      app: path.resolve(__dirname, 'src/app/index_dev.js'),
      /* vendors: ['react'], */
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/app.js',
      publicPath: '',
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react'],
            plugins: ['react-hot-loader/babel'],
          },
        },
      }],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/app/template.html',
        hash: true,
      }),
    ],
  },
};

const productionConfig = {
  app: {
    mode: 'production',
    entry: {
      app: path.resolve(__dirname, 'src/app/index_prod.js'),
      /* vendors: ['react'], */
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/app.js',
      publicPath: '',
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react'],
          },
        },
      }],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/app/template.html',
        hash: true,
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
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
                  targets: {
                    node: 'current',
                  },
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
  } else if (env.development) {
    switch (env.src) {
      case 'app':
        return developmentConfig.app;
      default:
        console.error(`Unknown webpack environment ${env}`);
        return {};
    }
  } else {
    console.error(`Unknown webpack environment ${env}`);
    return {};
  }
  return {};
};
