import { LoginForm } from '../../features/auth';

export default function LoginPage() {
  return (
    <div>
      <h1>Войти</h1>
      <p>Чтобы войти на сайт введите ваш email и пароль</p>
      <LoginForm />
    </div>
  );
}
