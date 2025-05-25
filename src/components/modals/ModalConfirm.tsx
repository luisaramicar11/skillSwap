"use client";
import styled from "styled-components";

// Modal Confirm Component
interface ModalConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  z-index: 1001;

    & p{
    color: #222 !important;
    font-size: 0.9rem !important;
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
    width: 95%;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #222;
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #222;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
`;

const ModalHeader = styled.div`
  font-size: 20px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2{
    margin: 0 !important;
    font-size: 20px !important;
  }
`;

const ModalConfirm: React.FC<ModalConfirmProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
        <h2>Confirmación</h2>
        <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <p>¿Estas completamente seguro de que quieres ejecutar esta acción? En caso de que te arrepientas podrás deshacerlo, pero solo después de un día.</p>
        <div>
          <ConfirmButton type="button" onClick={onConfirm}>CONFIRMAR</ConfirmButton>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalConfirm;
