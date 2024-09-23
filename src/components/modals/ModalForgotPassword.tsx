"use client";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { useState } from "react"; // Importa useState
import { h2 } from "framer-motion/client";

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
const Title = styled.h2`
   background: ${({ theme }) => theme.colors.gradientText};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 5px;
  width: 100% !important;
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
  const [email, setEmail] = useState(""); // Estado para almacenar el correo
  const [loading, setLoading] = useState(false); // Estado para manejar el estado de carga
  const router = useRouter(); // Uso del hook useRouter

  // Maneja el submit del formulario
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://skillswapriwi.azurewebsites.net/api/Auth/RequestEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Envía el email en el cuerpo
      });

      if (response.ok) {
        // Maneja la respuesta exitosa
        alert('Correo enviado con éxito. Revisa tu bandeja de entrada.'); // O usa una librería de notificaciones
        onClose(); // Cierra el modal
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'No se pudo enviar el correo.'}`); // Muestra el mensaje de error
      }
    } catch (error) {
      alert('Ocurrió un error al intentar conectar con el servidor.');
      console.error('Error al enviar el correo:', error);
    } finally {
      setLoading(false); // Restablece el estado de carga
    }
  };

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Recuperar contraseña</Title>
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="email-recovery">Ingresa tu correo electrónico</FormLabel>
          <Input
            type="email"
            id="email-recovery"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
            required
          />
          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </SubmitButton>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalPasswordRecovery;
