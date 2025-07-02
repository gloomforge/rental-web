import { useNavigate } from 'react-router';
import { useCategories } from '../hooks/useCategories';
import { getCategoryImageUrl } from '../services/categoryApi';
import CategoryCard from '../../../components/CategoryCard';
import styles from './Category.module.css';
import { ROUTES } from '../../../config/routes';

export default function CategoryList() {
  const { categories, loading, error } = useCategories();
  const navigate = useNavigate();

  const handleCategoryClick = (id) => {
    navigate(ROUTES.PRODUCT(id));
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={styles.categories}>
      <h1>Лучшие гаджеты в одном месте</h1>
      <p>Выберите нужную категорию</p>
      <div className={styles.categoryGrid}>
        {categories.map(({ id, name, imagePath }) => (
          <CategoryCard
            key={id}
            name={name}
            image={imagePath ? getCategoryImageUrl(imagePath) : undefined}
            onClick={() => handleCategoryClick(id)}
            priority={3}
          />
        ))}
      </div>
    </section>
  );
} 