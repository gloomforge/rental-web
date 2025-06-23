import { memo, useCallback } from 'react';
import styles from './MobileMenu.module.css';

const categories = ['IPhone', 'IPad', 'AirPods', 'Watch', 'Mac', 'Vision Pro'];
const services = ['Доставка и оплата', 'Гарантия', 'Трейд-ин', 'Контакты'];

const Section = memo(({ title, items }) => (
  <div className={styles.section}>
    <p className={styles.sectionTitle}>{title}</p>
    <div className={styles.list}>
      {items.map((item) => (
        <p key={item} className={styles.listItem}>
          {item}
        </p>
      ))}
    </div>
  </div>
));

function MobileMenu({ onClose }) {
  const handleClick = useCallback(() => onClose(), [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <Section title="Выберите категорию" items={categories} />
        <Section title="Мы предоставляем" items={services} />
      </div>
      <button className={styles.closeButton} onClick={handleClick}>
        ×
      </button>
    </div>
  );
}

export default memo(MobileMenu);
