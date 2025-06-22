import { Link } from 'react-router';
import { LoginForm } from '../../features/auth';
import styles from '../../styles/AuthPage.module.css';
import { ROUTES } from '../../config';

export default function LoginPage() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <h1 className={styles['title']}>Войти</h1>
        <p className={styles['subtitle']}>
          Чтобы войти на сайт введите ваш email и пароль
        </p>
        <LoginForm />

        <p className={styles['login-text']}>
          Еще нету аккаунта? <Link to={ROUTES.REGISTER}>Создать аккаунт</Link>
        </p>
      </div>
    </div>
  );
}
