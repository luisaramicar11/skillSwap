import React from "react";
import styled from "styled-components";
import ScrollContainer from "../scroll/Scroll";

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

  & strong {
    font-weight: bold;
  }
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgOrange};
  width: 60%;
  border-radius: 10px;
  height: 70%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 416px;
  border: none;

  @media (max-width: 1200px) {
    width: 90%;
    height: 70%;
  }
`;

const ModalHeader = styled.div`
  font-size: 20px !important;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  color: #fff;
  padding: 0.5rem;
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div{
    font-weight: bold;
    display: flex;
  }

  & article{
    font-weight: bold;
    font-style: normal;
    font-size: 20px !important;
    opacity: 0.6;
    padding-left: 6px;
  }
`;

const ModalCloseButton = styled.button`
  background: none;
  font-weight: bold;
  color: #000;
  opacity: 0.6;
  border: none;
  font-size: 1.5rem !important;
  cursor: pointer;
`;

const ModalContent = styled.div`
  margin: 1rem;
  margin-top: 0;
  border-radius: 10px;
  display: flex;
  align-items: start;
  flex: 1;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  overflow: auto;
  background-color: #fff;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  border-bottom-left-radius: 10px;
  height: auto;
  border-top-left-radius: 10px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 1rem;
  width: 60%;

  @media (max-width: 1200px) {
    border-bottom-left-radius: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.textBlack};
    width: 100%;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
  height: auto;
  width: 40%;
  border-left: 1px solid ${({ theme }) => theme.colors.textBlack};

  & article {
    height: 100%;
    padding: 0.75rem 1rem;
    display: flex;
    gap: 10px;
    justify-content: center;

    :last-child{
      align-self: center;
    }

    span{
      font-size: 40px;
      font-style: normal
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    border-left: none;

    & article {
      justify-content: start;
    }
  }
`;

const TipItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.div`
  filter: grayscale();
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

const TipText = styled.p`
  font-size: 0.9rem !important;
  color: #000;
`;

const AlertText = styled.p`
  font-size: 0.9rem !important;
  font-weight: 300;
  color: #000;
  margin-bottom: 10px;
  gap: 10px;
  font-style: normal;
`;

const DivRoute = styled.div`
  display: flex;
  border-radius: 10px;
  justify-content: flex-start;
  background-color: #fff;
  padding: 0.5rem;
  padding-left: 1rem;
  margin: 1rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const ModalTips: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <div>Cultura<article>SkillSwap</article></div>
          <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
        </ModalHeader>
        <DivRoute>C:\ User\ Documents\ SkillSwap</DivRoute>
        <ScrollContainer overflowY="auto" overflowX='auto' marginY="16px 0 16px" style={{ maxHeight: '100%' }}>
          <ModalContent>
            <LeftSection>
              <TipItem>
                <Icon>📂</Icon>
                <TipText><strong>Completar tu perfil</strong> mantiene la confianza entre usuarios y un <strong>ambiente seguro.</strong></TipText>
              </TipItem>
              <TipItem>
                <Icon>📂</Icon>
                <TipText>No compartas <strong>datos sensibles</strong>. La seguridad mutua primero.</TipText>
              </TipItem>
              <TipItem>
                <Icon>📂</Icon>
                <TipText>Reporta cualquier conducta <strong>sospechosa o inadecuada</strong>.</TipText>
              </TipItem>
            </LeftSection>
            <RightSection>
              <article>
                <span>🔵</span><AlertText>En tu sección <strong>Social</strong> podrás realizar <strong>Reportes</strong>.</AlertText>
              </article>
              <article>
                <span>⚠️</span><AlertText>Si lo solicitas, acude a las <strong>autoridades policiales</strong>.</AlertText>
              </article>
              <article>
                <span>⛔</span><AlertText>Las sanciones van de <strong>suspensiones a bloqueos</strong>.</AlertText></article>
            </RightSection>
          </ModalContent>
        </ScrollContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};


export default ModalTips;
