import { memo } from 'react';
import { useNavigate } from 'react-router';
import styles from './Category.module.css';
import CategoryCard from '../CategoryCard';

// import image
import iphoneCard from '../../assets/image/iphone-card-image.jpg';
import airpodsCard from '../../assets/image/airpods-card-image.jpg';
import applewatchCard from '../../assets/image/applewatch-card-image.jpg';
import macbookCard from '../../assets/image/macbook-card-image.jpg';
import ipadCard from '../../assets/image/ipad-card-image.jpg';
import visionproCard from '../../assets/image/visionpro-card-image.jpg';

const categories = [
  { name: 'iPhone', image: iphoneCard, url: '/products/iphone' },
  { name: 'AirPods', image: airpodsCard, url: '/products/airpods' },
  { name: 'Watch', image: applewatchCard, url: '/products/watch' },
  { name: 'Mac', image: macbookCard, url: '/products/mac' },
  { name: 'iPad', image: ipadCard, url: '/products/ipad' },
  { name: 'Vision Pro', image: visionproCard, url: '/products/visionpro' },
];

function Category() {
  const navigate = useNavigate();

  const handleCategoryClick = (url) => {
    navigate(url);
  };

  return (
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
  );
}

export default memo(Category);
