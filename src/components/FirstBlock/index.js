import React from "react";
import {
  Container,
  Image,
  ImageA1,
  ImageA2,
  Text,
  Title,
  Wrapper,
} from "./views";

const FirstBlock = () => {
  return (
    <Wrapper>
      <Title>Feel the vibes of TrippyStick!</Title>
      <Container>
        <Text>
          TrippyStick - where the mind goes on a journey like no other. Our
          psychedelic NFT collection will take you to new heights of
          consciousness with its mind-bending art pieces.
          <br />
          <br /> Each piece is designed to open up new portals in your mind and
          take you on a journey through the cosmos. Join us on this trippy ride
          and expand your mind like never before.
        </Text>
        <Image src="/images/Flower1.png" alt="asd" />
        <ImageA1 src="/images/Moon.png" />
        <ImageA2 src="/images/Swing.png" />
      </Container>
    </Wrapper>
  );
};
export default FirstBlock;
