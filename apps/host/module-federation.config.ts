import { ModuleFederationConfig } from '@nx/module-federation';

const sharedLibraries = [
  'react',
  'react-dom',
  'react-router-dom',
  '@mf-ecom-react19/logger',
];

const config: ModuleFederationConfig = {
  name: 'host',
  remotes: ['products'],
  shared: (library, sharedConfig) => {
    if (sharedLibraries.includes(library)) {
      if (library === '@mf-ecom-react19/logger') {
        return { singleton: true, requiredVersion: false };
      }
      return { singleton: true };
    }
    return false;
  },
  disableNxRuntimeLibraryControlPlugin: true,
};

export default config;
