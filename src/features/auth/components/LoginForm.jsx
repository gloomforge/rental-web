import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import styles from './AuthForm.module.css';

export default function RegisterForm() {
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
    <form onSubmit={handleSubmit} className={styles['form']}>
      <div className={styles['form-group']}>
        <label className={styles.label}>Почта</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ivan@example.com"
          required
          className={styles.input}
        />
      </div>

      <div className={styles['form-group']}>
        <label className={styles.label}>Пароль</label>
        <input
          type="password"
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
