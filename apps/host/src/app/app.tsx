import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';
import Header from '../components/header';
import Footer from '../components/footer';
import HomePage from '../pages/home';

const ProductDetailsPage = lazy(() =>
  loadRemote<{ default: React.ComponentType }>('products/ProductDetails').then(
    (module) => module || { default: () => null }
  )
);

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/product/:id"
            element={
              <Suspense fallback={null}>
                <ProductDetailsPage />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
