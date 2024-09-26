import styled from "styled-components";

// Styled Components para el formulario
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const FormWrapper = styled.div`
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  color: #e9a401;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  padding-top: 20px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    background-color: #333;
  }
`;