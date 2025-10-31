import ProductCard from './product-card';
import styles from './products-grid.module.css';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    description: 'Premium wireless headphones with noise cancellation',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    description: 'Fitness tracker with heart rate monitor and GPS',
  },
  {
    id: 3,
    name: 'Laptop Backpack',
    price: 49.99,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    description: 'Durable backpack with laptop compartment',
  },
  {
    id: 4,
    name: 'USB-C Cable',
    price: 19.99,
    image:
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
    description: 'Fast charging USB-C cable, 6ft length',
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: 129.99,
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    description: 'RGB mechanical keyboard with blue switches',
  },
  {
    id: 6,
    name: 'Wireless Mouse',
    price: 39.99,
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    description: 'Ergonomic wireless mouse with precision tracking',
  },
];

export default function ProductsGrid() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Featured Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
