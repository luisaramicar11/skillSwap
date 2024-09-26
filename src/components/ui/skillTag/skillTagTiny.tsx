'use client';
import styled from 'styled-components';
import React from 'react';
import { ISkillTagProps } from '@/src/models/skillTag.model';

// Estilos de la etiqueta SkillTag
const SkillTagTinyContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const SkillTagTiny = styled.p`
    display: inline-block;
    min-width: 60px;
    width: auto;
    text-align: center;
    padding: 3px !important;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.textPurple} !important;
    border: 1px solid ${({ theme }) => theme.colors.textPurple};
    font-size: 12px;
`;

// Componente para mostrar la lista de skills
const SkillTagTinyList: React.FC<ISkillTagProps> = ({ skillsArray }) => {  return (
    <SkillTagTinyContainer>
        {skillsArray.map((skill, index) => (
            <SkillTagTiny key={index}>{skill}</SkillTagTiny>
        ))}
    </SkillTagTinyContainer>
    );
};

// Exportar el componente para su uso
export default SkillTagTinyList;
