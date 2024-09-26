import React from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgGreen};
  width: 50%;
  height: 50%;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
    height: 70%;
  }
`;

const ModalHeader = styled.div`
  font-size: 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundGreen};
  color: #fff;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  background: none;
  font-weight: bold;
  color: #000;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const ModalContent = styled.div`
  display: flex;
  flex: 1;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  overflow: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 2;
  padding: 1rem;
  background-color: #fff;
  gap: 10px;
`;

const RightSection = styled.div`
  flex: 1;
  padding: 1rem;
  background-color: #fff;
  border-left: 1px solid ${({ theme }) => theme.colors.textTertiary};

  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.colors.textTertiary};
  }
`;

const TipItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const TipText = styled.p`
  font-size: 0.9rem;
  color: #000;
`;

const AlertText = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  color: #000;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <div>SkillSwap Safety</div>
          <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        </ModalHeader>
        <ModalContent>
          <LeftSection>
            <TipItem>
              <Icon src="/folder.svg" alt="Verify profile" />
              <TipText>Verificar tu perfil aumenta la confianza entre usuarios y garantiza un ambiente seguro.</TipText>
            </TipItem>
            <TipItem>
              <Icon src="/folder.svg" alt="No sensitive data" />
              <TipText>No compartas datos sensibles.</TipText>
            </TipItem>
            <TipItem>
              <Icon src="/folder.svg" alt="Report misconduct" />
              <TipText>Reporta cualquier comportamiento sospechoso o inadecuado.</TipText>
            </TipItem>
          </LeftSection>

          <RightSection>
            <AlertText>⚠️ No dudes en reportar.</AlertText>
            <AlertText>🔵 En el panel de Ayuda puedes ver más sobre Reportes.</AlertText>
            <AlertText>⛔ Cualquier tipo de abuso será sancionado.</AlertText>
          </RightSection>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
