import React from "react";
import { useRouter } from 'next/navigation';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logoutUser } from "../app/redux/slices/authSlice"; 

// Definimos los tipos de props para el componente
interface LogoutButtonProps {
  icon?: React.ReactNode; // El icono es opcional y puede ser cualquier nodo de React
}

const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};

  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
  background-color: ${({ theme }) => theme.colors.bgPrimary};;
  opacity: 0.7;

  &:hover {
    background-color:${({ theme }) => theme.colors.gradientPrimary};;
  }

  svg {
    margin-right: 8px; // Espacio entre el icono y el texto
  }
`;

const LogoutButton: React.FC<LogoutButtonProps> = ({ icon }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("authToken");
    router.push("/auth");
  };

  return (
    <Button onClick={handleLogout}>
      {icon && icon} {/* Renderizamos el ícono si está presente */}
      Salir del Perfil
    </Button>
  );
};

export default LogoutButton;
