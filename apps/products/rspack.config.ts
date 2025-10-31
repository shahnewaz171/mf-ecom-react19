import { NxAppRspackPlugin } from '@nx/rspack/app-plugin';
import { NxReactRspackPlugin } from '@nx/rspack/react-plugin';
import { join } from 'path';
import { NxModuleFederationPlugin } from '@nx/module-federation/rspack';
import mfconfig from './module-federation.config';

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/products'),
    publicPath: 'auto',
    uniqueName: 'products',
  },
  devServer: {
    port: 4201,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
  },
  ignoreWarnings: [
    {
      module: /@module-federation\/error-codes/,
      message: /Failed to parse source map/,
    },
  ],
  plugins: [
    new NxAppRspackPlugin({
      tsConfig: './tsconfig.app.json',
      main: './src/main.tsx',
      index: './src/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new NxReactRspackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
    new NxModuleFederationPlugin(
      {
        config: mfconfig,
      },
      {
        dts: {
          tsConfigPath: './tsconfig.app.json',
        },
      }
    ),
  ],
};
