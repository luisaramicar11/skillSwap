"use client";
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/src/app/redux/slices/authSlice'; 
import { toast } from 'react-toastify';
import { AppDispatch } from '@/src/app/redux/store';
import styled from 'styled-components';
import InputSingUp from '../../ui/inputs/InputSignUp';
import ButtonSingUp from '../../ui/buttons/ButtonSingUp';
import Label from '../../ui/labels/LabelAuth';

//Syled
import {FormWrapper} from './LoginStyling'
import {Container} from './LoginStyling'
import {Title} from './LoginStyling'
import {DivButton} from './LoginStyling'

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
      <Title>Iniciar Sesion</Title>
      <form onSubmit={handleSubmit}>
        <Label
          text= "Email"
          htmlFor='email'
          />
        <InputSingUp
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}  
          required
          />
        <Label
          text= "Contraseña"
          htmlFor='password'
          />  
        <InputSingUp
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
          />
          <DivButton>
            <ButtonSingUp type="submit" disabled={loading}>
              {loading ? 'Cargando...' : 'ENTRAR'}
            </ButtonSingUp>
          </DivButton>
      </form>
          </FormWrapper>

    </Container>
  );
}