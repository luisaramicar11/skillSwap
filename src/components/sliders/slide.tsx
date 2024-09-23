import { useState } from "react";
import styled from "styled-components";
import Modal from '../modals/ModalMatch';
import { ISliderCardProps } from "@/src/models/match.model";

const CardContainer = styled.div`
  width: 50%;
  height: 95%;
  min-height: 450px !important;
  margin: 1rem 0 1rem 1rem;
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
  font-size: 2rem;
  position: absolute;
  bottom: 2.5rem;
  left: 1.5rem;
  z-index: 99;
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

const StarButton = styled.button`
  position: absolute;
  bottom: 4.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  z-index: 99;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const SliderCard: React.FC<ISliderCardProps> = ({ user, onPass }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePassClick = () => {
    onPass();
  };

  const handleStarClick = () => {
    setModalOpen(true); // Aquí es donde abrirías el modal al hacer clic en la estrellita
  };

    return (
      <>
        <CardContainer>
          <PassButton onClick={handlePassClick}><div>&lt;</div> pass</PassButton>
          <Image urlImage={user.urlImage} alt= {user.fullName}/>
          <Title>{user.fullName}</Title>
          <Subtitle>{user.jobTitle}</Subtitle>
          <StarButton onClick={handleStarClick}>★</StarButton> {/* Aquí está la estrellita */}
        </CardContainer>
  
        {modalOpen && <Modal userToRequest={user}  isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
      </>
    );
};

export default SliderCard;