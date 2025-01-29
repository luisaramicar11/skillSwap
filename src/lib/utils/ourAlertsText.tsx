import styled from "styled-components";

export const OurAlertsText = styled.p`
  position: fixed;
  bottom: 74px;
  left: 20px;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.bgGray};
  background-color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.bgGray};
`;