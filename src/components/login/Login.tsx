"use client";
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../app/redux/slices/authSlice';
import { toast } from 'react-toastify';
import { AppDispatch } from '../../app/redux/store';

export default function LoginPage() {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch(); // Tipado correcto de dispatch
  const { loading } = useSelector((state: any) => state.auth);

  // State para manejar el formulario
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el submit del formulario de login
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { email, password } = form;

    if (!email || !password) {
      toast.error('Por favor, completa todos los campos.');
      return;
    }

    const resultAction = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(resultAction)) {
      const token = resultAction.payload?.access_token;
      if (token) {
        toast.success('Login exitoso!');
        localStorage.setItem('authToken', token);
        router.push('/');
      }
    } else {
      toast.error('Error al intentar iniciar sesión.');
    }
  }

  return (
    <div>
      <h1>Ingresar</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Login'}
        </button>
      </form>

    </div>
  );
}