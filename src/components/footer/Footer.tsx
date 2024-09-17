'use client';
import styled from "styled-components";
import React from "react";


// Estilos para el footer
const FooterStyled = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:300px;

  a {
    color:${({ theme }) => theme.colors.textPrimary};
    margin-left: 20px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: ${({ theme }) => theme.colors.textOrange};
    }
  }

  .social-icons {
    display: flex;
    gap: 10px;

    span {
      width: 20px;
      height: 20px;
      border: 2px solid ${({ theme }) => theme.colors.textPrimary};
      border-radius: 50%;
    }
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  border-top: 1px solid #f39c12;
  padding-top: 60px;
  width: 80%;
`;

export const Footer: React.FC = () => {
    return (

        <FooterStyled>
        <div>
          <a href="#">HOME</a>
          <a href="#">MATCH</a>
          <a href="#">DISCOVER</a>
          <a href="#">USER</a>
          <a href="#">LEGAL</a>
        </div>
        <Box>
          <p>
            © {new Date().getFullYear()} SkillSwap. All rights reserved.
          </p>
          <div className="social-icons">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Box>
      </FooterStyled>
       
    );
};
