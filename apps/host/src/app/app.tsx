import styles from './app.module.css';

import { lazy, Suspense, useEffect } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';
import Header from '../components/header';
import Footer from '../components/footer';

const ProductsGrid = lazy(() =>
  loadRemote('products/ProductsGrid').then(
    (module) => module || { default: () => null }
  )
);

const fetchTest = async () => {
  const testHookModule = await loadRemote('products/useTest');
  const testHook = testHookModule?.default();
  console.log('Fetched Test Data:', testHook);
};

export function App() {
  useEffect(() => {
    fetchTest();
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Welcome to ShopHub</h1>
          <p className={styles.heroSubtitle}>
            Discover amazing products at unbeatable prices
          </p>
        </section>
        <Suspense
          fallback={<div className={styles.loading}>Loading products...</div>}
        >
          <ProductsGrid />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
