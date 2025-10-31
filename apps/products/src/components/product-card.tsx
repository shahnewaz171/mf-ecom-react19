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
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
