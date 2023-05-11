import styled from "styled-components";

export const IFrame = styled.iframe`
  width: 600px;
  height: 600px;
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding-bottom: 18px;
  position: relative;
`;
export const Message = styled.div`
  width: 581px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-size: 60px;
`;
