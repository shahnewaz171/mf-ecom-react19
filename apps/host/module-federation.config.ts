import { ModuleFederationConfig } from '@nx/module-federation';

const sharedLibraries = ['react', 'react-dom', 'react-router-dom'];

const config: ModuleFederationConfig = {
  name: 'host',
  shared: (libraryName, sharedConfig) => {
    if (!sharedLibraries.includes(libraryName)) {
      return false;
    }
  },
};

export default config;
