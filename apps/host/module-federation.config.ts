import { createModuleFederationConfig } from '@module-federation/enhanced/rspack';
import { resolve } from 'path';

// const sharedLibraries = ['react', 'react-dom', 'react-router-dom'];

export default createModuleFederationConfig({
  name: 'host',
  filename: 'remoteEntry.js',
  experiments: {
    provideExternalRuntime: true,
  },
  remotes: {
    products: 'products@http://fake.com/mf-manifest.json',
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      eager: true,
    },
    'react-router-dom': {
      singleton: true,
      eager: true,
    },
  },
  dts: {
    tsConfigPath: './tsconfig.app.json',
    generateTypes: true,
  },
  runtimePlugins: [resolve(__dirname, './dynamic-remote-plugin.ts')],
});
