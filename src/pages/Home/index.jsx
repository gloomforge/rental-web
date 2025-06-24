import styles from '../../styles/HomePage.module.css';
import iphone from '../../assets/image/iphone-image.png';
import iphoneCard from '../../assets/image/iphone-card-image.jpg';
import airpodsCard from '../../assets/image/airpods-card-image.jpg';
import applewatchCard from '../../assets/image/applewatch-card-image.jpg';
import macbookCard from '../../assets/image/macbook-card-image.jpg';
import ipadCard from '../../assets/image/ipad-card-image.jpg';
import visionproCard from '../../assets/image/visionpro-card-image.jpg';

const categories = [
  { name: 'iPhone', image: iphoneCard },
  { name: 'AirPods', image: airpodsCard },
  { name: 'Watch', image: applewatchCard },
  { name: 'Mac', image: macbookCard },
  { name: 'iPad', image: ipadCard },
  { name: 'Vision Pro', image: visionproCard },
];

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Откройте будущее с техникой Apple по доступным ценам!</h1>
          <p>При покупке дарим подарки на сумму до 15000 рублей</p>
          <button className={styles.heroButton}>Магазин</button>
          <img src={iphone} alt="iPhone" className={styles.heroImage} />
        </div>
      </section>

      <section className={styles.categories}>
        <h1>Лучшие гаджеты в одном месте</h1>
        <p>Выберите нужную категорию</p>
        <div className={styles.categoryGrid}>
          {categories.map(({ name, image }) => (
            <div key={name} className={styles.categoryCard}>
              <img src={image} alt={name} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
