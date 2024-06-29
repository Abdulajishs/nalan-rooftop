import styles from './Home.module.css';
import backgroundImage from '../assets/images/restaurant.jpg';

const Home = () => {
  return (
    <>
     <div className={styles.home} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Welcome to Our Restaurant</h1>
      <p>Experience the best food in town.</p>
     </div>
    </>
  );
};

export default Home;
