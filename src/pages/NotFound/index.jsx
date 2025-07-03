import styles from '../../styles/NotFound.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Страница не найдена</h2>
      <p className={styles.text}>
        Страница, которую вы ищете могла быть удалена или никогда не существовала
      </p>
    </div>
  )
}
