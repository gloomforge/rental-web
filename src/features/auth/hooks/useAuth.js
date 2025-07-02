import { useCallback, useState, useEffect } from 'react';
import {
  loginUser,
  registerUser,
  getCurrentUser,
  logoutUser,
} from '../services/authApi';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    try {
      const data = await getCurrentUser();
      setUser(data);
    } catch (e) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (email, password) => {
    await loginUser(email, password);
    await fetchUser();
  }, [fetchUser]);

  const register = useCallback(async (fullName, email, password) => {
    await registerUser(fullName, email, password);
    await fetchUser();
  }, [fetchUser]);

  const logout = useCallback(async () => {
    await logoutUser();
    await fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { user, login, register, logout, fetchUser, loading };
}
