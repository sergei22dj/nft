import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 100px;
`;
export const ContainerView = styled.div`
  display: flex;
  @media screen and (max-width: 1130px) {
    display: none;
  }
`;
export const ContainerView2 = styled.div`
  display: none;
  flex-direction: column;
  @media screen and (max-width: 1130px) {
    display: flex;
  }
`;
export const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 90px;
  @media screen and (max-width: 1130px) {
    display: none;
  }
`;
export const ContainerName2 = styled.div`
  display: none;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
  @media screen and (max-width: 1130px) {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`;
export const ViewBox = styled.div`
  width: 332px;
  height: 326px;

  margin: 0 auto;
  position: relative;
  background-image: url(${(props) => props.bg});
  background-size: cover;
`;
export const Name = styled.img`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    scale: 1.1;
  }
`;
export const Body = styled.img`
  width: 332px;
  height: 326px;
  z-index: 100;
  position: absolute;
`;
export const Clothing = styled.img`
  width: 332px;
  height: 326px;
  position: absolute;
  z-index: 101;
`;
export const Eyes = styled.img`
  width: 332px;
  height: 326px;
  position: absolute;
  z-index: 102;
`;
export const Heads = styled.img`
  width: 332px;
  height: 326px;
  position: absolute;
  z-index: 103;
`;
export const Mouth = styled.img`
  width: 332px;
  height: 326px;
  position: absolute;
  z-index: 104;
`;
export const Select = styled.div`
  display: flex;
  align-items: center;
`;
export const DemoImg = styled.img`
  width: 191px;
  height: 195px;
  margin-bottom: ${(props) => (props.clothing === "clothing" ? "100px" : "0")};
  @media screen and (max-width: 520px) {
    width: 128px;
    height: 124px;
  }
`;
export const Arrow = styled.img`
  cursor: pointer;
  @media screen and (max-width: 520px) {
    width: 80px;
    height: 80px;
  }
`;
export const ContainerSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -116px;
  margin-top: 90px;
  justify-content: center;
  @media screen and (max-width: 585px) {
    margin: 0;
  }
`;
