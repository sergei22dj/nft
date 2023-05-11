import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 1106px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;
export const Logo = styled.img`
  cursor: pointer;
`;
export const TitleContainer = styled.div`
  display: flex;
  padding-left: 190px;
  column-gap: 75px;
  @media screen and (max-width: 1500px) {
    padding-left: 77px;
    column-gap: 75px;
  }
  @media screen and (max-width: 1106px) {
    padding-left: 0;
    column-gap: 0;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
`;
export const Title = styled.img`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    scale: 1.1;
  }
`;
