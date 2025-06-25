import styles from '../../styles/HomePage.module.css';
import iphone from '../../assets/image/iphone-image.png';
import Category from '../../components/Category';

const HomePage = () => {
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

      <Category />
    </div>
  );
};

export default HomePage;
