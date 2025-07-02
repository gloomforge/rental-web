import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../hooks/useAuth';
import styles from './AuthForm.module.css';
import { useNavigate } from 'react-router';
import Notification from '../../../components/Notification';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, user } = useAuth();
  const [error, setError] = useState('');
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  const notificationRef = useRef(null);

  useEffect(() => {
    if (user && notification?.success) {
      notificationRef.current = true;
    }
  }, [user, notification]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      setNotification({
        title: 'Успешный вход',
        description: `Вы успешно вошли в систему как ${email}`,
        success: true,
      });
    } catch (error) {
      setNotification({
        title: 'Ошибка входа',
        description: error.message || 'Ошибка авторизации',
        success: false,
      });
    }
  };

  const handleNotificationClose = () => {
    setNotification(null);
    if (notification?.success && notificationRef.current) {
      navigate('/');
      notificationRef.current = false;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles['form-group']}>
          <label htmlFor="login-email" className={styles.label}>
            Почта
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ivan@example.com"
            required
            className={styles.input}
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="login-password" className={styles.label}>
            Пароль
          </label>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            required
            minLength={6}
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles['submit-button']}>
          Войти
        </button>
      </form>

      {notification && (
        <Notification
          title={notification.title}
          description={notification.description}
          onClose={handleNotificationClose}
        />
      )}
    </>
  );
}
