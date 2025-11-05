import { ModuleFederationConfig } from '@nx/module-federation';

const sharedLibraries = [
  'react',
  'react-dom',
  'react-router-dom',
  '@mf-ecom-react19/logger',
];

const config: ModuleFederationConfig = {
  name: 'products',
  exposes: {
    './ProductsGrid': './src/components/products/products-grid.tsx',
    './ProductDetails': './src/components/products/details/product-details.tsx',
    './useTest': './src/components/hooks/useTest.ts',
  },
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
