import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import ProductsGrid from './components/products/products-grid';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <>
      <p>I'm running in the remote</p>
      <ProductsGrid />
    </>
  </StrictMode>
);
