import { useCallback } from 'react';
import { loginUser, registerUser } from '../services/authApi';

export function useAuth() {
  const login = useCallback(async (email, password) => {
    return loginUser(email, password);
  }, []);

  const register = useCallback(async (username, email, password) => {
    return registerUser(username, email, password);
  }, []);

  return { login, register };
}
