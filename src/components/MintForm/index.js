import React from "react";
import { Container, Text, Title, Wrapper } from "./views";

const MintForm = () => {
  return (
    <Wrapper>
      <Container>
        <Text>
          Mint: 0.0075 eth
          <br />
          Pub-mint: 0.01 eth
        </Text>
        <Text>Mint Time: </Text>
      </Container>
      <Title src="/images/Connect.svg" />
    </Wrapper>
  );
};

export default MintForm;
