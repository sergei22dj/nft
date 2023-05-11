import styled from "styled-components";

export const Wrapper = styled.div`
  width: 581px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: 2px solid black;
  border-radius: 12px;
  margin: 0;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding-bottom: 18px;
  position: relative;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const Title = styled.img`
  width: 245px;
  height: 63px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 87px 10px 52px;
  width: 100%;
  column-gap: 20px;
`;
export const Text = styled.div`
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0.15em;
`;
