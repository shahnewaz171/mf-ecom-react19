import { withZephyr } from 'zephyr-rspack-plugin';
import { NxAppRspackPlugin } from '@nx/rspack/app-plugin';
import { NxReactRspackPlugin } from '@nx/rspack/react-plugin';
import { join, resolve } from 'path';
import { NxModuleFederationPlugin } from '@nx/module-federation/rspack';
import mfconfig from './module-federation.config';

module.exports = withZephyr()({
  output: {
    path: join(__dirname, '../../dist/apps/host'),
    publicPath: 'auto',
    uniqueName: 'host',
  },
  devServer: {
    port: 4200,
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
  },
  resolve: {
    alias: {
      '@mf-ecom-react19/logger': resolve(
        __dirname,
        '../../packages/logger/src/index.ts'
      ),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
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
          generateTypes: true,
        },
      }
    ),
  ],
});
