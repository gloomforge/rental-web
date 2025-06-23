import { memo } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

export const LogForm = memo(LoginForm);
export const RegForm = memo(RegisterForm);

export * from './services/authApi';
export * from './hooks/useAuth';
