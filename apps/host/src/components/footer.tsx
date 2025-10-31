import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.heading}>ShopHub</h3>
          <p className={styles.description}>
            Your one-stop destination for quality products at great prices.
          </p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Quick Links</h4>
          <ul className={styles.list}>
            <li>
              <a href="#home" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#products" className={styles.link}>
                Products
              </a>
            </li>
            <li>
              <a href="#about" className={styles.link}>
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Customer Service</h4>
          <ul className={styles.list}>
            <li>
              <a href="#shipping" className={styles.link}>
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#returns" className={styles.link}>
                Returns
              </a>
            </li>
            <li>
              <a href="#faq" className={styles.link}>
                FAQ
              </a>
            </li>
            <li>
              <a href="#support" className={styles.link}>
                Support
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Connect With Us</h4>
          <div className={styles.social}>
            <a
              href="#facebook"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <span role="img" aria-label="Facebook">
                📘
              </span>
            </a>
            <a
              href="#twitter"
              className={styles.socialLink}
              aria-label="Twitter"
            >
              <span role="img" aria-label="Twitter">
                🐦
              </span>
            </a>
            <a
              href="#instagram"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <span role="img" aria-label="Instagram">
                📷
              </span>
            </a>
            <a
              href="#linkedin"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <span role="img" aria-label="LinkedIn">
                💼
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>© 2025 ShopHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
