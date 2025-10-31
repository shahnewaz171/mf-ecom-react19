import { ModuleFederationConfig } from '@nx/module-federation';

// const sharedLibraries = ['react', 'react-dom', 'react-router-dom'];

const config: ModuleFederationConfig = {
  name: 'products',
  exposes: {
    './ProductsGrid': './src/components/products/products-grid.tsx',
    './useTest': './src/components/hooks/useTest.ts',
  },
  // shared: (libraryName, sharedConfig) => {
  //   if (!sharedLibraries.includes(libraryName)) {
  //     return false;
  //   }
  // },
};

export default config;
