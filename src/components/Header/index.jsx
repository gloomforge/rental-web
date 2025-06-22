import styles from './Header.module.css';
import cardIcon from '../../assets/image/card-icon.png';
import { useNavigate } from 'react-router';

const navItems = ['IPhone', 'IPad', 'AirPords', 'Watch', 'Mac', 'VisionPro'];

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={`${styles['header']}`}>
      <div className={styles['header-container']}>
        <div className={styles['header-logo']}>
          <h1>appshop</h1>
        </div>

        <nav className={styles['header-navigation']}>
          <ul className={styles['navigation-list']}>
            {navItems.map((item) => (
              <li key={item} className={styles['navigation-item']}>
                {item}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles['auth-section']}>
          <button
            className={styles['auth-button']}
            onClick={() => {
              navigate('/login');
            }}
          >
            Войти
          </button>
          {/* user profile */}
        </div>

        <div className={styles['basket-button']}>
          <img
            className={styles['basket-icon']}
            src={cardIcon}
            alt={'корзина'}
          />
          <label className={styles['basket-label']}>Корзина</label>
        </div>
      </div>
    </header>
  );
}
