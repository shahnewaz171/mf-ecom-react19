import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import { Loading, ErrorMessage, ProductRating } from '../../common';
import styles from './product-details.module.css';

export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(id);

  if (loading) {
    return (
      <div className={styles.container}>
        <Loading message="Loading product details..." />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className={styles.container}>
        <ErrorMessage
          message={error || 'Product not found'}
          onRetry={() => navigate('/')}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button onClick={() => navigate('/')} className={styles.backButton}>
        ← Back to Products
      </button>

      <div className={styles.productDetails}>
        <div className={styles.imageSection}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
        </div>

        <div className={styles.infoSection}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.title}>{product.title}</h1>

          <ProductRating
            rate={product.rating.rate}
            count={product.rating.count}
          />

          <p className={styles.price}>${product.price.toFixed(2)}</p>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.actions}>
            <button className={styles.addToCart}>Add to Cart</button>
            <button className={styles.buyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
