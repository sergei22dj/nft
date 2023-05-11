import React from "react";
import { Igm2, Img1, Logo, Text, Wrapper } from "./views";
import { ImageA1 } from "../SecondBlock/views";

const ThirdBlock = () => {
  return (
    <>
      <Wrapper>
        <Logo src="/images/Logo3.svg" />
        <Img1 src="/images/Fight.png" />
        <ImageA1 src="/images/Fly.png" />
        <Igm2 src="/images/Hole.png" />
      </Wrapper>
      <Text>Feel the vibe and create your stick</Text>
    </>
  );
};
export default ThirdBlock;
