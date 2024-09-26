import React from "react";
import { useRouter } from 'next/navigation';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../app/redux/slices/authSlice"; 

// Definimos los tipos de props para el componente
interface LogoutButtonProps {
  icon?: React.ReactNode; // El icono es opcional y puede ser cualquier nodo de React
}

const Button = styled.button`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textWhite};
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.textWhite};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: background-color 0.3s;
  background-color: ${({ theme }) => theme.colors.bgNavbar};
  width:300px;

  &:hover {
    background-color:${({ theme }) => theme.colors.gradientPrimary};;
  }

  svg {
    margin-right: 10px; // Espacio entre el icono y el texto
  }
`;

const LogoutButton: React.FC<LogoutButtonProps> = ({ icon }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("clickedUserId");
    router.push("/auth");
  };

  return (
    <Button onClick={handleLogout}>
      {icon && icon} Cerrar sesión
    </Button>
  );
};

export default LogoutButton;