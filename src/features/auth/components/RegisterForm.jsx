import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';
import styles from './AuthForm.module.css';
import Notification from '../../../components/Notification';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState(null);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(username, email, password);
      setNotification({
        title: 'Успешная регистрация',
        description: `Вы успешкно вошли в систему как, ${response.account.fullName}`,
      });
    } catch (error) {
      setNotification({
        title: 'Ошибка регистрация',
        description: error.message || `Что-то полшло не так`,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles['form-group']}>
          <label htmlFor="username" className={styles.label}>
            Имя
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Иван"
            required
            className={styles.input}
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="email" className={styles.label}>
            Почта
          </label>
          <input
            id="email"
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
          <label htmlFor="password" className={styles.label}>
            Пароль
          </label>
          <input
            id="password"
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
          Создать аккаунт
        </button>
      </form>

      {notification && (
        <Notification
          title={notification.title}
          description={notification.description}
          onClose={() => {
            setNotification(null);
            if (notification.success) navigate('/');
          }}
        />
      )}
    </>
  );
}
