import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsGrid from './components/products/products-grid';
import ProductDetailsPage from './components/products/details/product-details';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <div>
        <p>I'm running in the remote - Products App</p>
        <Routes>
          <Route path="/" element={<ProductsGrid />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
);
