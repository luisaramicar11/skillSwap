"use client"
import React from 'react';
import styled from 'styled-components';
import InputAuth from '../ui/inputs/InputAuth';
import ButtonSingUp from '../ui/buttons/ButtonSingUp';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
`;

const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.gradientPrimary};
  border-radius: 15px;
  padding: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: white;
  display: block;
  margin-bottom: 8px;
  text-align: left;
`;

const LoginForm: React.FC = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Log in</Title>
        <form>
          <div>
            <Label htmlFor="email">Email</Label>
            <InputAuth
              id="id"
              type="email"
              placeholder="Enter your email"
              value={"email"}
              onChange={(e) => (e.target.value)}
              name="email"
              required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <InputAuth
              id="id"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={"contraseña"}
              onChange={(e) => (e.target.value)}
              name="password"
              required />
          </div>
          <ButtonSingUp
            type="submit">ENTER
          </ButtonSingUp>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default LoginForm;
