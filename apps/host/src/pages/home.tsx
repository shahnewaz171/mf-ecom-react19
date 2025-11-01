import { lazy, Suspense, useEffect } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';
import styles from '../app/app.module.css';

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

export function HomePage() {
  useEffect(() => {
    fetchTest();
  }, []);

  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to ShopHub</h1>
        <p className={styles.heroSubtitle}>
          Discover amazing products at unbeatable prices
        </p>
      </section>
      <Suspense fallback={null}>
        <ProductsGrid />
      </Suspense>
    </div>
  );
}

export default HomePage;
