'use client'
import styled from 'styled-components';
import React from 'react';

const Widget = styled.div`
  padding:20px;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 10px;
`

const WidgetContainer: React.FC = () => {
    return (
      <Widget>
      </Widget>
    );
};

export default WidgetContainer;
