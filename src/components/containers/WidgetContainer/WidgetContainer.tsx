'use client'
import styled from 'styled-components';
import React from 'react';

const Widget = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  border-radius: 10px;
`

const WidgetContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Widget>
      {children}
    </Widget>
  );
};

export default WidgetContainer;
