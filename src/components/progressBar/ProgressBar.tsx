import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

const Step = styled.div`
    flex: 1;
    position: relative;
    text-align: center;
`;

const Circle = styled.div<{ active: boolean; completed: boolean }>`
    width: 17px;
    height: 17px;
    background-color: ${({ active, completed }) => (active || completed ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)')};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.textOrange};
    font-weight: bold;
    font-size: 10px;
    transition: background-color 0.3s;
`;

const ProgressBar = ({ currentStep }: { currentStep: number }) => {
    const totalSteps = 7;

    return (
        <ProgressContainer>
            {Array.from({ length: totalSteps }).map((_, index) => (
                <Step key={index}>
                    <Circle active={index === currentStep} completed={index < currentStep}>
                        {index + 1}
                    </Circle>
                </Step>
            ))}
        </ProgressContainer>
    );
};

export default ProgressBar;
