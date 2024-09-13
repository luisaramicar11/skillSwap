import { useState } from 'react';
import styled from 'styled-components';
//import Modal from './Modal';

interface Person {
  name: string;
  role: string;
  image: string;
}

interface SliderCardProps {
  person: Person;
  onPass: () => void;
}

const CardContainer = styled.div`
  width: 50%;
  height: 95%;
  border-radius: 0.5rem;
  margin: 1rem;
  position: relative;
  color: white;
  text-align: center;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  @media (max-width: 1024px) {
    width: 80%; /* Aumenta el ancho en pantallas más pequeñas */
    height: auto;
    margin: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%; /* Para pantallas más pequeñas aún, usa todo el ancho */
    height: auto;
    margin: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;

  @media (max-width: 768px) {
    height: auto; /* Ajusta la altura automáticamente en pantallas pequeñas */
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  z-index: 99;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Reduce el tamaño de la fuente en pantallas más pequeñas */
    bottom: 2rem;
    left: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Aún más pequeño en móviles */
    bottom: 1rem;
    left: 1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  z-index: 99;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Ajusta la fuente para pantallas más pequeñas */
    bottom: 1rem;
    left: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Aún más pequeño en pantallas muy pequeñas */
    bottom: 0.5rem;
    left: 1rem;
  }
`;

const PassButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  z-index: 99;
  font-weight: 100;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Disminuye el tamaño en pantallas pequeñas */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Disminuye aún más para móviles */
  }
`;

const StarButton = styled.button`
  position: absolute;
  bottom: 4rem;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  z-index: 99;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 4rem; /* Ajusta el tamaño para pantallas más pequeñas */
  }

  @media (max-width: 480px) {
    font-size: 3rem; /* Aún más pequeño en pantallas móviles */
  }
`;

const SliderCard: React.FC<SliderCardProps> = ({ person, onPass }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePassClick = () => {
    onPass();
  };

  const handleStarClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <CardContainer>
        <PassButton onClick={handlePassClick}>→ pass</PassButton>
        <Image src={person.image} alt={person.name} />
        <Title>{person.name}</Title>
        <Subtitle>{person.role}</Subtitle>
        <StarButton onClick={handleStarClick}>★</StarButton>
      </CardContainer>

      {/* {modalOpen && <Modal onClose={() => setModalOpen(false)} />} */}
    </>
  );
};

export default SliderCard;

