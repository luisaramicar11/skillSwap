import React from "react";
import styled from "styled-components";
import ReportForm from "../forms/FormReport";
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
  margin: 0;
  padding: 0;

  & strong {
    font-weight: bold;
  }

  > * {
    font-size: 14px !important ;
  }
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgOrange};
  background-color: white;
  width: 70%;
  height: 75%;
  max-height: 410px;
  padding: 20px;
  position: relative;
  margin: 0;
  border-radius: 10px;
  padding: 0;
  border: none;

  & h2{
    margin: 0;
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
  font-size: 1.5rem  !important;
  cursor: pointer;
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

const ModalContent = styled.div`
  display: flex;
  margin: 1rem;
  margin-top: 0;
  border-radius: 10px;
  max-height: 400px;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const LeftSection = styled.div`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  flex: 2;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 15px;
  padding: 1rem;
  width: 60%;

  @media (max-width: 600px) {
    width: 100%;
    border-radius: 10px;
  }

  & textarea {
    max-height: 100px;
    border-radius: 10px;
  }
`;

const RightSection = styled.div`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-left: 1px solid ${({ theme }) => theme.colors.textTertiary};

  @media (max-width: 600px) {
        display: none;
    }
`;

const AlertText = styled.p`
  font-size: 0.8rem  !important;
  font-weight: 300;
  color: #000;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: auto !important;

  span {
    font-style: normal;
    padding-right: 0.5rem;
    font-size: 1rem  !important;
  }
`;

const PoliceInfo = styled.div`
  font-weight: 300;
  color: #000;
  padding: 0.8rem;
`;

const DivAlertText = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const DivColor = styled.div`
  border-top-right-radius: 10px;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary};
  margin: 0;
  padding: 0;
  width: 100%;
  height: 2rem;
`;

const DivTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
        <ModalContainer>
        <ScrollContainer overflowY="auto" overflowX='auto' marginY="16px 0 16px" style={{ maxHeight: '100%' }}>
          <ModalHeader>
            <div>Cultura<article>SkillSwap</article></div>
            <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
          </ModalHeader>
          <DivRoute>C:\ User\ Documents\ SkillSwap</DivRoute>
          <ModalContent>
            <LeftSection>
              <ReportForm closeModal={onClose} />
            </LeftSection>

            <RightSection>
              <DivAlertText>
                <DivColor />
                <DivTexts>
                  <AlertText>
                    <span>⚠️</span> No dudes en reportar.
                  </AlertText>
                  <AlertText>
                    <span>🔵</span> La seguridad es lo primero.
                  </AlertText>
                  <AlertText>
                    <span>⛔</span> Reprobamos cualquier tipo de abuso o ilegalidad.
                  </AlertText>
                </DivTexts>
              </DivAlertText>

              <PoliceInfo>
                <strong>Línea Policía Nacional: </strong><br />0 8000 91 1190<br /><br />
                <strong>Página CAI Virtual: </strong><br />https://cai.virtual.policia.gov.co
              </PoliceInfo>
            </RightSection>
          </ModalContent>
          </ScrollContainer>
        </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
