import { useState } from "react";
import styled from "styled-components";

interface Person {
  fullName: string;
  jobTitle: string;
  image: string;
}

interface SliderCardProps {
  person: Person;
  onPass: () => void;
}

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

const Image = styled.img`
  min-height: 450px;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
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
`;

const SliderCard: React.FC<SliderCardProps> = ({ person, onPass }) => {
  return (
    <CardContainer>
      <PassButton onClick={onPass}>→ pass</PassButton>
      <Image src={person.image} alt={person.fullName} />
      <Title>{person.fullName}</Title>
      <Subtitle>{person.jobTitle}</Subtitle>
    </CardContainer>
  );
};

export default SliderCard;
