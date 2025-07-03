import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  if (!product) return null;

  const { name, description, price, image } = product;

  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={name}
        className={styles.image}
      />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <p className={styles.price}>{price}</p>
          <button className={styles.cartButton}>В корзину</button>
        </div>
      </div>
    </div>
  );
}
