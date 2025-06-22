import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Иван"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ivan@example.com"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="****"
        minLength="6"
        required
      />
      <button type="submit">Создать аккаунт</button>
    </form>
  );
}
