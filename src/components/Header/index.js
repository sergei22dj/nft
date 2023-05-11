import React from "react";
import { Logo, Title, TitleContainer, Wrapper } from "./views";
import Link from "next/link";

const Header = () => {
  const twitter = () => {
    window.open("https://twitter.com/trippysticknft", "_blank");
  };

  return (
    <Wrapper>
      <Link href="/">
        {" "}
        <Logo src="/images/Logo.svg" />
      </Link>

      <TitleContainer>
        <Title src="/images/Twitter.svg" onClick={twitter} />

        <Link href="/raffle">
          <Title src="/images/Raffle.svg" />
        </Link>
        <Link href="/mint">
          <Title src="/images/Mint.svg" />
        </Link>
      </TitleContainer>
    </Wrapper>
  );
};
export default Header;
