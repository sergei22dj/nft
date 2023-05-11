import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 189px;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Logo = styled.img`
  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;
export const Img1 = styled.img`
  position: absolute;
  left: -130px;
  @media screen and (max-width: 1240px) {
    width: 271px;
    height: 200px;
  }
  @media screen and (max-width: 820px) {
    display: none;
  }
`;
export const Igm2 = styled.img`
  position: absolute;
  top: -120px;
  right: -100px;
  @media screen and (max-width: 1240px) {
    width: 200px;
    height: 200px;
    top: auto;
  }
  @media screen and (max-width: 780px) {
    display: none;
  }
`;
export const Text = styled.div`
  margin: 0 auto;
  font-size: 17px;
  margin-top: 20px;
  text-align: center;
`;
