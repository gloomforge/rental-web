import { memo, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import cartIcon from '../../assets/image/card-icon.png';
import burgerIcon from '../../assets/image/menu-32.png';
import styles from './Header.module.css';
import MobileMenu from '../MobileMenu';

const categories = ['IPhone', 'IPad', 'AirPods', 'Watch', 'Mac', 'Vision Pro'];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMenuOpen(location.hash === '#menu');
  }, [location.hash]);

  const handleCloseMenu = () => {
    navigate(location.pathname);
    setIsMenuOpen(false);
  };

  const navList = useMemo(
    () =>
      categories.map((item) => (
        <li key={item} className={styles.navItem}>
          {item}
        </li>
      )),
    []
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.menuTrigger}>
            <a href={'#menu'}>
              <img src={`${burgerIcon}`} alt="Открыть меню" />
            </a>
          </div>

          <div className={styles.logo}>
            <h1>appshop</h1>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.navList}>{navList}</ul>
          </nav>

          <div className={styles.auth}>
            <button
              className={styles.authBtn}
              onClick={() => navigate('/login')}
            >
              Войти
            </button>
          </div>

          <div className={styles.cart}>
            <img
              src={`${cartIcon}`}
              alt="Корзина"
              className={styles.cartIcon}
            />
            <span className={styles.cartLabel}>Корзина</span>
          </div>
        </div>
      </header>

      {isMenuOpen && <MobileMenu onClose={handleCloseMenu} />}
    </>
  );
}

export default memo(Header);
