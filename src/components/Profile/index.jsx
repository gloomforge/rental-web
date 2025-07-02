import { useEffect } from 'react';
import { useAuth } from '../../features/auth';
import { useNavigate } from 'react-router';
import styles from './Profile.module.css';

export default function Profile() {
  const { user, logout, loading, fetchUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) return null;

  if (!user) {
    return (
      <div className={styles.profileBtnGroup}>
        <button className={styles.profileBtn} onClick={() => navigate('/login')}>Войти</button>
        <button className={styles.profileBtn} onClick={() => navigate('/register')}>Регистрация</button>
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileAvatar}>
        {(user.account?.fullName && user.account.fullName[0]) || (user.email && user.email[0]) || '?'}
      </div>
      <span className={styles.profileName}>{user.account?.fullName || user.email || 'Пользователь'}</span>
      <button className={styles.profileBtn} onClick={logout}>Выйти</button>
    </div>
  );
}
