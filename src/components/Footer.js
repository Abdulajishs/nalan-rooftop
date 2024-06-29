import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2022 Nalan Rooftop. All rights reserved.</p>
      <div className={styles.socialMedia}>
        <a href="https://www.instagram.com/nalanrooftop/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
