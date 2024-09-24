'use client';
import styled from 'styled-components';
import React from 'react';
import { ISkillTagProps } from '@/src/models/skillTag.model';

// Estilos de la etiqueta SkillTag
const SkillTagContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;

    > :nth-child(2) {
        margin-left: 2rem;
}
`;

const SkillTag = styled.p`
    display: inline-block;
    width: min-content;
    min-width: 100px;
    text-align: center;
    margin: 5px 5px 0 0;
    padding: 5px 10px;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.textPurple};
    border: 1px solid ${({ theme }) => theme.colors.textPurple};
    font-size: 14px;
`;

// Componente para mostrar la lista de skills
const SkillTagList: React.FC<ISkillTagProps> = ({ skillsArray }) => {  return (
    <SkillTagContainer>
        {skillsArray.map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
        ))}
    </SkillTagContainer>
    );
};

// Exportar el componente para su uso
export default SkillTagList;
