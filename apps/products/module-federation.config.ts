import { createModuleFederationConfig } from '@module-federation/enhanced/rspack';

export default createModuleFederationConfig({
  name: 'products',
  filename: 'remoteEntry.js',
  exposes: {
    './ProductsGrid': './src/components/products/products-grid.tsx',
    './useTest': './src/components/hooks/useTest.ts',
  },
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
    'react-router-dom': {
      singleton: true,
    },
  },
  dts: {
    tsConfigPath: './tsconfig.app.json',
    generateTypes: true,
  },
});
