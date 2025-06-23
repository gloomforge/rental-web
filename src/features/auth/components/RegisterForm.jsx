import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import styles from './AuthForm.module.css';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password);
    } catch (error) {}
  };

  return (
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
  );
}
