import styles from './product-rating.module.css';

interface ProductRatingProps {
  rate: number;
  count: number;
  showCount?: boolean;
}

export const ProductRating = ({
  rate,
  count,
  showCount = true,
}: ProductRatingProps) => {
  const fullStars = Math.round(rate);
  const emptyStars = 5 - fullStars;

  return (
    <div className={styles.rating}>
      <span
        className={styles.stars}
        aria-label={`Rating: ${rate} out of 5 stars`}
      >
        {'★'.repeat(fullStars)}
        {'☆'.repeat(emptyStars)}
      </span>
      {showCount && (
        <span className={styles.ratingText}>
          {rate} ({count} reviews)
        </span>
      )}
    </div>
  );
};
