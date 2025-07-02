import styles from '../../styles/HomePage.module.css';
import iphone from '../../assets/image/iphone-image.png';
import Category from '../../features/category';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import Notification from '../../components/Notification';

const HomePage = () => {
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (location.state?.fromAuth) {
      setShowNotification(true);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleShopClick = () => {
    window.location.href = '/shop';
  };

  return (
    <div className={styles.wrapper}>
      {showNotification && (
        <Notification
          title="Вы уже вошли в аккаунт"
          description="Если хотите, вы можете выйти из аккаунта."
          onClose={() => setShowNotification(false)}
        />
      )}
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