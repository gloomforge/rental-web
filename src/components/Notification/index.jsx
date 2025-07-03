import { memo, useState, useEffect } from 'react';
import styles from './Notification.module.css';
import checkIcon from '../../assets/image/info-32.png';

function Notification({ title, description, duration = 4000, onClose }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => onClose?.(), 300); // дождись fadeOut
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${exiting ? styles.exit : ''}`}>
      <img src={checkIcon} alt="✓" className={styles.icon} />
      <div className={styles.text}>
        {title && <p className={styles.title}>{title}</p>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <button className={styles.close} onClick={() => setExiting(true)}>
        ×
      </button>
    </div>
  );
}

export default memo(Notification);
