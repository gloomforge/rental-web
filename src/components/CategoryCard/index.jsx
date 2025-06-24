import { memo, useEffect, useState, useRef } from 'react';
import styles from './CategoryCard.module.css';

const CategoryCard = memo(({ name, image, onClick, priority = 5 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  const handleClick = () => {
    const invoke = () => onClick?.();
    if (window.requestIdleCallback) window.requestIdleCallback(invoke);
    else invoke();
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.categoryCard} ${imageLoaded ? styles.loaded : ''}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Категория ${name}`}
      onLoad={() => {}}
    >
      {visible && (
        <>
          <div className={styles.imageContainer}>
            {!imageLoaded && <div className={styles.imageSkeleton} />}
            <img
              src={image}
              alt={name}
              className={`${styles.image} ${imageLoaded ? styles.imageLoaded : ''}`}
              onLoad={() => setImageLoaded(true)}
              loading={priority <= 3 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={priority <= 2 ? 'high' : 'auto'}
            />
          </div>
          <span className={styles.name}>{name}</span>
        </>
      )}
    </div>
  );
});

CategoryCard.displayName = 'CategoryCard';

export default CategoryCard;
