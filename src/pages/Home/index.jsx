import React from 'react';
import styles from '../../styles/HomePage.module.css';
import iphone from '../../assets/image/iphone-image.png';
import iphoneCard from '../../assets/image/iphone-card-image.jpg';
import airpodsCard from '../../assets/image/airpods-card-image.jpg';
import applewatchCard from '../../assets/image/applewatch-card-image.jpg';
import macbookCard from '../../assets/image/macbook-card-image.jpg';
import ipadCard from '../../assets/image/ipad-card-image.jpg';
import visionproCard from '../../assets/image/visionpro-card-image.jpg';
import CategoryCard from '../../components/CategoryCard';

const categories = [
  { name: 'iPhone', image: iphoneCard, url: '/products/iphone' },
  { name: 'AirPods', image: airpodsCard, url: '/products/airpods' },
  { name: 'Watch', image: applewatchCard, url: '/products/watch' },
  { name: 'Mac', image: macbookCard, url: '/products/mac' },
  { name: 'iPad', image: ipadCard, url: '/products/ipad' },
  { name: 'Vision Pro', image: visionproCard, url: '/products/visionpro' },
];

const HomePage = () => {
  const handleCategoryClick = (url) => {
    window.location.href = url;
  };

  const handleShopClick = () => {
    window.location.href = '/shop';
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Откройте будущее с техникой Apple по доступным ценам!</h1>
          <p>При покупке дарим подарки на сумму до 15000 рублей</p>
          <button className={styles.heroButton} onClick={handleShopClick}>
            Магазин
          </button>
          <img src={iphone} alt="iPhone" className={styles.heroImage} />
        </div>
      </section>

      <section className={styles.categories}>
        <h1>Лучшие гаджеты в одном месте</h1>
        <p>Выберите нужную категорию</p>
        <div className={styles.categoryGrid}>
          {categories.map(({ name, image, url }) => (
            <CategoryCard
              key={name}
              name={name}
              image={image}
              onClick={() => handleCategoryClick(url)}
              priority={3}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
