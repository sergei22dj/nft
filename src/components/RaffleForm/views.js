import styled from "styled-components";

export const Wrapper = styled.div`
  width: 371px;
  height: 497px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 12px;
  margin: 0;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: ${(p) => (p.pad ? "0 16px 48px" : "0 16px 190px")};

  position: relative;
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;
export const Congrats = styled.div`
  width: 603px;
  height: 153px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 12px;
  margin: 0;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 18px 28px 18px 42px;
  position: relative;
  animation: 1s show ease;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const CongratsText = styled.div`
  font-size: 35px;
  line-height: 41px;
  letter-spacing: 0.19em;
`;
export const Image2 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;
export const Image1 = styled.img`
  position: absolute;
  z-index: -100;
  bottom: 77px;
  right: 3px;
  width: 85px;
`;
export const Title = styled.img`
  width: 187px;
  height: 69px;
  margin-top: 16px;
`;
export const BlockOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${(p) => (p.pad ? " 0 37px 0 18px" : " 0 37px 140px 18px")};
  @media screen and (max-width: 420px) {
    padding: 0 0 0 18px;
  }
`;
export const Text = styled.div`
  font-size: 17px;
  line-height: 19px;

  letter-spacing: 0.15em;
`;
export const Button1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 96px;
  height: 43px;
  border-radius: 8px;
  cursor: pointer;
`;
export const Input = styled.input`
  all: unset;
  width: 100%;
  height: 35px;
  border: 0.5px solid black;
  border-radius: 5px;
  background: #ececec;
  padding: 8px 11px;
  box-sizing: border-box;
  &::-webkit-input-placeholder {
    font-size: 15px;
    color: #000000;
    line-height: 19px;
    letter-spacing: 0.15em;
    opacity: 0.3;
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 195px;
  height: 43px;
  border-radius: 8px;
  cursor: pointer;
`;
export const Wrong = styled.div`
  color: red;
  font-size: 12px;
`;
export const InputWrapper = styled.div`
  width: 100%;
  height: 35px;
`;
