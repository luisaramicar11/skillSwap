"use client"
import React from 'react';
import styled from 'styled-components';
import InputSingUp from '../ui/inputs/InputSingUp';
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
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #fff;
  border-radius: 5px;
  background: transparent;
  color: white;
  font-size: 1rem;

  ::placeholder {
    color: white;
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    border-color: #34e89e;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  width: 100%;
  background-color: white;
  color: #0070f3;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0070f3;
    color: white;
  }
`;



const LoginForm: React.FC = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Log in</Title>
        <form>
          <div>
            <Label htmlFor="email">Email</Label>
            <InputSingUp 
                 type="email"
                 placeholder="Enter your email"
                 value={"email"}
                 onChange={(e) => (e.target.value)}
                 name="email"
                 required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <InputSingUp 
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
