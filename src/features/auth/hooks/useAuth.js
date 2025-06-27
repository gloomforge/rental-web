import { useCallback, useState, useEffect } from 'react';
import {
  loginUser,
  registerUser,
  getCurrentUser,
} from '../services/authApi';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = useCallback(async (email, password) => {
    const data = await loginUser(email, password);
    setUser(data);
    return data;
  }, []);

  const register = useCallback(async (fullName, email, password) => {
    const data = await registerUser(fullName, email, password);
    setUser(data);
    return data;
  }, []);

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

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { user, login, register, fetchUser, loading };
}
