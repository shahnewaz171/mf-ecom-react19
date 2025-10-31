import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>ShopHub</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#home" className={styles.navLink}>
            Home
          </a>
          <a href="#products" className={styles.navLink}>
            Products
          </a>
          <a href="#about" className={styles.navLink}>
            About
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.iconButton} aria-label="Search">
            <span role="img" aria-label="Search">
              🔍
            </span>
          </button>
          <button className={styles.iconButton} aria-label="Shopping cart">
            <span role="img" aria-label="Cart">
              🛒
            </span>
          </button>
          <button className={styles.loginButton}>Login</button>
        </div>
      </div>
    </header>
  );
}
