import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;
export const TitleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const Title = styled.img`
  margin: 225px auto 0;
  @media screen and (max-width: 520px) {
    width: 300px;
  }
`;
export const Img1 = styled.img`
  position: absolute;
  left: -100px;
  bottom: -160px;
  z-index: -10;
  @media screen and (max-width: 760px) {
    width: 200px;
    height: 200px;
    bottom: -88px;
  }
  @media screen and (max-width: 660px) {
    display: none;
  }
`;
export const Img2 = styled.img`
  position: absolute;
  bottom: -60px;
  right: -100px;
  z-index: -10;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const Img3 = styled.img`
  position: absolute;
  bottom: -17px;
  left: 50%;
  right: 50%;
  @media screen and (max-width: 1490px) {
    display: none;
  }
`;
export const Img4 = styled.img`
  position: absolute;
  bottom: 0px;
  right: -60px;
  @media screen and (max-width: 820px) {
    width: 158px;
    right: 0px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 200px;
  justify-content: center;
  margin-top: 130px;
`;
export const Text = styled.div`
  font-size: 17px;
  position: relative;
  line-height: 19px;
  letter-spacing: 0.15em;
  max-width: 490px;
`;
export const FootContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 110px;
  column-gap: 20px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const LeftBlock = styled.div``;
export const Logo = styled.img`
  width: 116px;
  height: 48px;
`;
export const Logo1 = styled.img`
  width: 171px;
  height: 47px;
`;
export const RightBlock = styled.div`
  padding-right: 250px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
export const Tab = styled.div`
  padding-left: 15px;
  padding-top: 15px;
  font-size: 17px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    scale: 1.1;
  }
`;
