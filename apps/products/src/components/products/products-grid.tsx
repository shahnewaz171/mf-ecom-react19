import ProductCard from './card/product-card';
import { useProducts } from '../hooks/useProducts';
import { Loading, ErrorMessage } from '../common';
import styles from './products-grid.module.css';

export default function ProductsGrid() {
  const INITIAL_DISPLAY_COUNT = 8;
  const {
    products,
    displayedProducts,
    loading,
    error,
    showingAll,
    handleShowMore,
    handleShowLess,
  } = useProducts(INITIAL_DISPLAY_COUNT);

  if (loading) {
    return <Loading message="Loading products..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Featured Products</h2>

      <div className={styles.grid}>
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>

      {products.length > INITIAL_DISPLAY_COUNT && (
        <div className={styles.showMoreContainer}>
          {!showingAll ? (
            <button onClick={handleShowMore} className={styles.showMoreButton}>
              Show More ({products.length - displayedProducts.length} more
              products)
            </button>
          ) : (
            <button onClick={handleShowLess} className={styles.showMoreButton}>
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}
