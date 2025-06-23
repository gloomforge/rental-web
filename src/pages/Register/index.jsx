import { Link } from 'react-router';
import { RegForm } from '../../features/auth';
import styles from '../../styles/AuthPage.module.css';
import { ROUTES } from '../../config';

export default function RegisterPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['container']}>
        <h1 className={styles['title']}>Регистрация</h1>
        <p className={styles['subtitle']}>
          Чтобы войти на сайт введите ваш email и пароль
        </p>
        <RegForm />

        <p className={styles['login-text']}>
          Уже есть аккаунт? <Link to={ROUTES.LOGIN}>Войти</Link>
        </p>
      </div>
    </div>
  );
}
