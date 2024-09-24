import styled from "styled-components";

export const LineTitles = styled.div`
  font-size: clamp(1rem,2vw,3rem);
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.textOrange};
  border-bottom: 4px solid ${({ theme }) => theme.colors.textOrange};
  font-weight: bold;
  opacity: 0.3;
  width: 100vw !important;
  text-align: center;
`;

export const DivRecentUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 54px 0;

  & div{
    padding: 1rem 0;

    & hr{
      padding:0;
      margin: 0 400px !important;
      translate: 0 15px;
      border: none;
      height: 4px;
      opacity: 0.1;
      border-radius: 500px;
      background-color: ${({ theme }) => theme.colors.textOrange};
    }
  }

  & article {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }
`;
