import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import styles from './AuthForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {}
  };

  return (
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
  );
}
