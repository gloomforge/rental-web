import { memo } from 'react';
import { useNavigate } from 'react-router';
import styles from './Category.module.css';
import CategoryCard from '../CategoryCard';
import { ROUTES } from '../../config';

// import image
import iphoneCard from '../../assets/image/iphone-card-image.jpg';
import airpodsCard from '../../assets/image/airpods-card-image.jpg';
import applewatchCard from '../../assets/image/applewatch-card-image.jpg';
import macbookCard from '../../assets/image/macbook-card-image.jpg';
import ipadCard from '../../assets/image/ipad-card-image.jpg';
import visionproCard from '../../assets/image/visionpro-card-image.jpg';

const categories = [
  { name: 'iPhone', image: iphoneCard, id: 'iphone' },
  { name: 'AirPods', image: airpodsCard, id: 'airpods' },
  { name: 'Watch', image: applewatchCard, id: 'watch' },
  { name: 'Mac', image: macbookCard, id: 'mac' },
  { name: 'iPad', image: ipadCard, id: 'ipad' },
  { name: 'Vision Pro', image: visionproCard, id: 'visionpro' },
];

function Category() {
  const navigate = useNavigate();

  const handleCategoryClick = (id) => {
    navigate(ROUTES.PRODUCT(id));
  };

  return (
    <section className={styles.categories}>
      <h1>Лучшие гаджеты в одном месте</h1>
      <p>Выберите нужную категорию</p>
      <div className={styles.categoryGrid}>
        {categories.map(({ name, image, id }) => (
          <CategoryCard
            key={name}
            name={name}
            image={image}
            onClick={() => handleCategoryClick(id)}
            priority={3}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(Category);
