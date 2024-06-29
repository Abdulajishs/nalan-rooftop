import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = ()=>{
    return(
        <header className={styles.header}> 
            <nav>
                <ul className={styles.navlist}>
                    <li className={styles.navItem}><Link to="/" className={styles.navLink}>Home</Link> </li>
                    <li className={styles.navItem}><Link to="/menu" className={styles.navLink}>Menu</Link> </li>
                    <li className={styles.navItem}><Link to="/about" className={styles.navLink}>About</Link> </li>
                    <li className={styles.navItem}><Link to="/contact" className={styles.navLink}>Contact</Link> </li>
                    <li className={styles.navItem}><Link to="/reservation" className={styles.navLink}>Reservation</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;