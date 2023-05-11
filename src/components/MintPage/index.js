import React from "react";
import { Wrapper } from "../RafflePage/views";
import Header from "../Header";
import MintForm from "../MintForm";
import { IFrame, Message } from "./views";

const MintPage = () => {
  return (
    <Wrapper>
      <Header />
      <Message>MINT IS COMING</Message>
      {/*<IFrame
        src="https://ipfs.thirdwebcdn.com/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x76180c14729B344200B8757c6F6A5087D7F93B60&chain=%7B%22name%22%3A%22Binance+Smart+Chain+Mainnet%22%2C%22chain%22%3A%22BSC%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fbinance.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Binance+Chain+Native+Token%22%2C%22symbol%22%3A%22BNB%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22bnb%22%2C%22chainId%22%3A56%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22binance%22%7D"
        frameBorder={0}
      ></IFrame> */}
    </Wrapper>
  );
};
export default MintPage;
