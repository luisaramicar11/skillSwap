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
  margin: 0;
  padding: 0;
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPink};
  width: 60%;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;
  margin: 0;
  padding: 0;
`;

const ModalHeader = styled.div`
  font-size: 2rem;
  background: ${({ theme }) => theme.colors.backgroundPink};
  color: #fff;
  padding: 1rem;
  padding-left: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  span{
    color: ${({ theme }) => theme.colors.textPink};
  }
`;

const ModalCloseButton = styled.button`
  background: none;
  font-weight: bold;
  color: #000;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  resize: none;
`;

const SendButton = styled.button`
  background: none;
  width: 50%;
  border: none;
  padding: 0.3rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 800;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 10px;
  text-align: end;
  padding: 1.5rem;
  padding-top:2rem;
`;

const UserName = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div{
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  p{
    color: #000;
    font-size: 0.8rem;
    font-weight: 500;
    font-style: italic;
  }
`;

const VerifiedBadge = styled.span`
  color: ${({ theme }) => theme.colors.textBlueDark};
  border: 1px solid ${({ theme }) => theme.colors.textBlueDark};
  font-weight: bold;
  border-radius: 3rem;
  padding: 2px 20px;
  font-size: 1rem;
`;

const DivRoute = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color:#fff;
  padding: 0.5rem;
  padding-left: 1rem;
  margin: 0.8rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const DivRequest = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  margin: 0.5rem;
  padding: 1rem;
`;

const Div = styled.div`
  display: flex;
  margin: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;
const DivConnections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
  margin:0;
`;

const Connections = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    font-size: 1rem;
  }
`;

// Sección de rating
const RatingSection = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    font-size: 1rem;
  }
`;

const DivRating = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const RatingStars = styled.div`
  color: #f5c518;
  font-size: 1.2rem;
`;

const Star = styled.span`
  color: gold;
  font-size: 20px;
`;

const ModalContent = styled.div`
  display: flex;
  margin: 1rem;
  margin-top:2rem;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const LeftSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 15px;
  padding-right: 10px;
  width: 60%;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-left: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const TipItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const TipText = styled.p`
  font-size: 14px;
  color: #333;
`;

const AlertText = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PoliceInfo = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: auto;
`;

const DivAlertText = styled.div`
 display: flex;
 flex-direction: column;
`;

const DivColor = styled.div`
  background: ${({ theme }) => theme.colors.backgroundGreen};
  margin: 0;
  padding:0;
  width: 100%;
  height: 4dvh;
`;

const DivTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          SkillSwap <span>Safety</span>
          <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        </ModalHeader>
        <DivRoute>C:\ User\ Documents\ SafetyTyps</DivRoute>
        <ModalContent>
          {/* Left section with the tips */}
          <LeftSection>
            <TipItem>
              <Icon src="/folder.svg" alt="Verify profile" />
              <TipText>Verificar tu perfil aumenta la confianza entre usuarios y garantiza un ambiente seguro para el intercambio de habilidades.</TipText>
            </TipItem>
            <TipItem>
              <Icon src="/folder.svg" alt="No sensitive data" />
              <TipText>No compartas datos sensibles. Mantén tus interacciones en entornos virtuales controlados de forma segura y consciente.</TipText>
            </TipItem>
            <TipItem>
              <Icon src="/folder.svg" alt="Report misconduct" />
              <TipText>Respeta a los demás y reporta cualquier comportamiento sospechoso o inadecuado para mantener la seguridad de todos.</TipText>
            </TipItem>
          </LeftSection>

          {/* Right section with warnings */}
          <RightSection>
            <DivAlertText>
            <DivColor /> 
            <DivTexts>
            <AlertText>
              ⚠️ No dudes en reportar. La seguridad mutua es primera.
            </AlertText>
            <AlertText>
              🔵 En el panel de Ayuda del User puedes ver más sobre Reportes y Seguridad.
            </AlertText>
            <AlertText>
              ⛔ Cualquier tipo de abuso o actividad ilegal nos interpela a tomar medidas.
            </AlertText>
            </DivTexts>  
            </DivAlertText>
        
            <PoliceInfo>
              Policía Nacional - CAI Virtual <br />
              Línea Nacional: 0 8000 91 1190 <br />
              Página web: cai.virtual.policia.gov.co
            </PoliceInfo>
          </RightSection>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;