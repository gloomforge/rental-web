import { useProducts } from '../hooks/useProducts';
import ProductCard from '../../../components/ProductCard';
import { getProductImage } from '../services/productApi';
import styles from './ProductList.module.css';

export default function ProductList({ categoryId }) {
  const { products, loading, error } = useProducts(categoryId);

  if (loading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;
  if (!products.length) return <div className={styles.empty}>Нет товаров в этой категории</div>;

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            ...product,
            image: getProductImage(product.imagePath),
            title: product.name,
            specs: product.specs || [],
          }}
        />
      ))}
    </div>
  );
}
