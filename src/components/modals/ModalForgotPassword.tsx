"use client";
import { useRouter } from "next/navigation"; // Import useRouter
import styled from "styled-components";

interface ModalPasswordRecoveryProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Fondo oscuro
  z-index: 1000; // Asegura que el modal esté enfrente de todo
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  z-index: 1001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const FormLabel = styled.label`
  display: block;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #000;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

const ModalPasswordRecovery: React.FC<ModalPasswordRecoveryProps> = ({ isOpen, onClose }) => {
  const router = useRouter(); // Uso del hook useRouter

  // Maneja el submit del formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    // Aquí puedes agregar lógica para manejar el envío del correo electrónico

    // Redirigir a la página de recuperación de contraseña
    router.push('/recoverPassword'); // Cambia '/reset-password' por la ruta a la que quieras redirigir
  };

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Recuperar contraseña</h2>
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="email-recovery">Ingresa tu correo electrónico</FormLabel>
          <Input
            type="email"
            id="email-recovery"
            placeholder="Correo electrónico"
            required
          />
          <SubmitButton type="submit">
            Enviar
          </SubmitButton>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalPasswordRecovery;
