import { useNavigate } from 'react-router-dom';
import { logger } from '@mf-ecom-react19/logger';
import styles from './product-card.module.css';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  description,
}: ProductCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    logger.logInfo(`Viewing details for product ${id}`);
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Added product ${id} to cart`);
    // Add cart functionality here
  };

  return (
    <div className={styles.card} onClick={handleViewDetails}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <button className={styles.button} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
