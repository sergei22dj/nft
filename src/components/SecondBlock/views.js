import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 65px 38px 0 47px;
  display: flex;
  column-gap: 46px;
  width: 100%;
  position: relative;
  @media screen and (max-width: 1330px) {
    column-gap: 20px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 65px 0 0 0;
    align-items: center;
  }
`;
export const Title = styled.div`
  font-size: 36px;
  font-family: "Klyakson";
  line-height: 19px;
  letter-spacing: 0.15em;
  @media screen and (max-width: 1000px) {
    margin-top: 30px;
  }
`;
export const Text = styled.div`
  margin-top: 44px;
  line-height: 23px;
  font-size: 17px;
  letter-spacing: 0.15em;
  padding-right: 90px;
  @media screen and (max-width: 1330px) {
    padding-right: 40px;
  }
  @media screen and (max-width: 1000px) {
    padding-right: 0;
  }
`;
export const Image = styled.img`
  width: 534px;
  height: 330px;
  @media screen and (max-width: 1330px) {
    width: 400px;
    height: 280px;
  }
  @media screen and (max-width: 1130px) {
    width: 327px;
    height: 235px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const ImageA1 = styled.img`
  position: absolute;
  bottom: 209px;
  right: -75px;

  @media screen and (max-width: 1240px) {
    width: 122px;
    height: 189px;
    right: -59px;
  }
  @media screen and (max-width: 1000px) {
    bottom: 100px;
  }
`;
