import { memo, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import cartIcon from '../../assets/image/card-icon.png';
import burgerIcon from '../../assets/image/menu-32.png';
import styles from './Header.module.css';
import MobileMenu from '../MobileMenu';
import { useCategories } from '../../features/category';
import Profile from '../../components/Profile';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { categories, loading } = useCategories();

  useEffect(() => {
    setIsMenuOpen(location.hash === '#menu');
  }, [location.hash]);

  const handleCloseMenu = () => {
    navigate(location.pathname);
    setIsMenuOpen(false);
  };

  const navList = useMemo(
    () =>
      (loading ? [] : categories).map((cat) => (
        <li key={cat.id} className={styles.navItem}>
          {cat.name}
        </li>
      )),
    [categories, loading]
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
            <Profile />
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
