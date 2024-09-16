"use client";
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../app/redux/slices/authSlice';
import { toast } from 'react-toastify';
import { AppDispatch } from '../../app/redux/store';
import styled from 'styled-components';
import InputSingUp from '../ui/inputs/InputAuth';
import ButtonSingUp from '../ui/buttons/ButtonSingUp';
import Label from '../ui/labels/LabelAuth';

//Syled
import { FormWrapper } from './LoginStyling'
import { Container } from './LoginStyling'
import { Title } from './LoginStyling'
import { DivButtonLogin } from './LoginStyling'

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
    <Container>
  <FormWrapper>
    <Title>Iniciar Sesión</Title>
    <form onSubmit={handleSubmit}>
      <Label text="Email" htmlFor="email-login" />
      <InputSingUp
        type="email"
        id="email-login"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        autoComplete="email"
      />
      <Label text="Contraseña" htmlFor="password-login" />
      <InputSingUp
        type="password"
        id="password-login"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        required
        autoComplete="current-password"
      />
      <DivButtonLogin>
        <ButtonSingUp type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'ENTRAR'}
        </ButtonSingUp>
      </DivButtonLogin>
    </form>
  </FormWrapper>
</Container>

  )
}