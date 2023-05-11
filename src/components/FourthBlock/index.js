import React from "react";
import {
  FootContainer,
  Img1,
  Img2,
  Img3,
  Img4,
  LeftBlock,
  Logo,
  Logo1,
  RightBlock,
  Tab,
  Text,
  TextContainer,
  Title,
  TitleContainer,
  Wrapper,
} from "./views";
import Link from "next/link";

const FourthBlock = () => {
  const twitter = () => {
    window.open("https://twitter.com/trippysticknft", "_blank");
  };

  return (
    <Wrapper>
      <TitleContainer>
        <Img1 src="/images/Sun.svg" />
        <Title src="/images/Logo4.svg" />
        <Img2 src="/images/Hello.svg" />
      </TitleContainer>
      <TextContainer>
        <Text>
          -What is TrippyStick?
          <br />
          &emsp;&emsp;TrippyStick is an NFT collection on the Ethereum
          blockchain consisting of 3,000 unique, hand-drawn trippy stick .
        </Text>
        <Text>
          -What is the minting price for a TrippyStick NFT?
          <br />
          &emsp;&emsp;The minting price for a Triptastic NFT is 0.005 ETH.
        </Text>
        <Text>
          -We have a stealth mint. What is that?
          <br />
          &emsp;&emsp;Stealth Mint is a process whereby some NFTs can be minted
          without prior announcement. We will only have a public phase(FCFS).
        </Text>
        <Text>
          -What is a raffle on our website?
          <br />
          &emsp;&emsp;A raffle on our website is a competition in which we
          raffle 250 nft from our collection. To participate, you will need to
          use a unique code that will be published on our official Twitter
          account.
        </Text>
      </TextContainer>
      <FootContainer>
        <LeftBlock>
          <Logo1 src="/images/Trippystick1.svg" />
          <Text style={{ marginTop: "20px", marginLeft: "10px" }}>
            is not just a collection of pretty pictures, it's a way to
            experience the ultimate high without ever leaving your chair. These
            NFTs are infused with a special kind of energy that will elevate
            your senses and open your mind to new possibilities. Trust us, you
            won't be able to resist the trippy allure of Triptastic.
          </Text>
          <Img3 src="/images/Fight2.svg" />
        </LeftBlock>

        <RightBlock>
          <Logo style={{ marginRight: "10px" }} src="/images/Links.svg" />
          <Tab onClick={twitter}>twitter</Tab>
          <Link href="/mint">
            <Tab>mint</Tab>
          </Link>
          <Link href="/raffle">
            <Tab>raffle</Tab>
          </Link>
        </RightBlock>
        <Img4 src="/images/CloudDrops.svg" />
      </FootContainer>
    </Wrapper>
  );
};
export default FourthBlock;
