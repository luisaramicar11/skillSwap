import { useState } from "react";
import styled from "styled-components";
import Modal from '../modals/ModalMatch';
import { ISliderCardProps } from "@/src/models/match.model";
import { PiHandshake } from "react-icons/pi";

const CardContainer = styled.div`
  width: 50%;
  min-height: 100% !important;
  max-height: 75vh !important;
  border-radius: 0.5rem;
  position: relative;
  color: white;
  text-align: center;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const Image = styled.div<{ urlImage: string, alt: string }>`
  background-image: url(${(props) => props.urlImage}); 
  background-size: cover;
  background-position: center;
  min-height: 450px;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  border: solid 1px ${({ theme }) => theme.colors.textBlack};
`;

const Title = styled.h3`
  width: 400px;
  font-size: 2rem;
  text-align: start;
  position: absolute;
  hyphens: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  bottom: 2.5rem;
  left: 1.5rem;
  z-index: 99;

  @media (max-width: 1600px) {
    width: 340px;
  }

  @media (max-width: 1400px) {
    width: 320px;
  }

  @media (max-width: 1350px) {
    width: 260px;
  }

  @media (max-width: 1150px) {
    width: 150px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
  position: absolute;
  bottom: 2.5rem;
  left: 1.5rem;
  z-index: 99;
  color: #ccc;
`;

const PassButton = styled.button`
  position: absolute;
  top: 1rem;
  padding: 0;
  right: 1.5rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  z-index: 99;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  opacity: 0.6;

  & div {
    font-weight: 300;
    font-style: normal;
    transform: scaleX(0.5) scaleY(1.4)  !important;
    opacity: 0.6;
  }
`;

const MatchButton = styled.button`
  position: absolute;
  padding: 0;
  bottom: 4.05rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  z-index: 99;
  cursor: pointer;
  opacity: 0.7;

  @media (max-width: 768px) {
    bottom: 3.65rem;
    font-size: 2.25rem;
  }

  @media (max-width: 480px) {
    bottom: 3.55rem;
    font-size: 2.5rem;
  }
`;

const SliderCard: React.FC<ISliderCardProps> = ({ user, onPass }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePassClick = () => {
    onPass();
  };

  const handleMatchClick = () => {
    setModalOpen(true); // Aquí es donde abrirías el modal al hacer clic en el ícono de apretón de manos
  };

  return (
    <>
      <CardContainer>
        <PassButton onClick={handlePassClick}><div>&lt;</div> pass</PassButton>
        <Image urlImage={user.urlImage} alt={user.fullName} />
        <Title>{user.fullName}</Title>
        <Subtitle>{user.jobTitle}</Subtitle>
        <MatchButton onClick={handleMatchClick}><PiHandshake /></MatchButton> {/* Aquí va el ícono de apretón de manos */}
      </CardContainer>

      {modalOpen && <Modal userToRequest={user} isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default SliderCard;