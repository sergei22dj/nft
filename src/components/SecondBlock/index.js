import React from "react";
import { Container, Image, ImageA1, Text, Title, Wrapper } from "./views";

const SecondBlock = () => {
  return (
    <Wrapper>
      <Image src="/images/Image3.png" alt="asd" />
      <Container>
        <Title>Collection</Title>
        <Text>
          TrippyStick is a collection of unique NFTs created in a trippy style.{" "}
          <br />
          <br />
          The collection features 3000 one-of-a-kind items, each of which was
          stealth minted. <br />
          <br />
          But that's not all: with the unique Trippynator utility, you can
          customize your characters' traits and make them even more unique and
          valuable. <br />
          <br />
          And as a special bonus, the first 250 minters of TrippyStick NFTs will
          get an airdrop of a T-coin, which will give you early access to our
          tool Trippynator.
        </Text>
      </Container>
    </Wrapper>
  );
};
export default SecondBlock;
