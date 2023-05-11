import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 56px 116px;
  height: 100vh;
  width: 100%;
  background: url("/images/House.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media screen and (max-width: 540px) {
    padding: 56px 0px;
  }
`;
