import { createModuleFederationConfig } from '@module-federation/enhanced/rspack';

export default createModuleFederationConfig({
  name: 'products',
  filename: 'remoteEntry.js',
  exposes: {
    './ProductsGrid': './src/components/products/products-grid.tsx',
    './ProductDetails': './src/components/products/details/product-details.tsx',
    './useTest': './src/components/hooks/useTest.ts',
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
});
