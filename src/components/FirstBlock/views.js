import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 70px 0 0 153px;
  @media screen and (max-width: 585px) {
    padding: 70px 0 0 0;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 230px;
  @media screen and (max-width: 1500px) {
    height: auto;
  }
`;
export const Title = styled.div`
  font-size: 36px;
  font-family: "Klyakson";
  line-height: 29px;
  letter-spacing: 0.15em;
  @media screen and (max-width: 1312px) {
    max-width: 500px;
  }
`;
export const Text = styled.div`
  margin-top: 53px;
  line-height: 23px;
  font-size: 17px;
  letter-spacing: 0.15em;
`;
export const Image = styled.img`
  margin-left: 155px;
  width: 312px;
  height: 318px;
  margin-top: -20px;
  @media screen and (max-width: 1080px) {
    width: 239px;
    height: 234px;
    margin-left: 70px;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const ImageA1 = styled.img`
  position: absolute;
  top: -75px;
  left: -179px;
  @media screen and (max-width: 585px) {
    display: none;
  }
`;
export const ImageA2 = styled.img`
  position: absolute;
  bottom: -52px;
  left: -210px;
  @media screen and (max-width: 585px) {
    display: none;
  }
`;
