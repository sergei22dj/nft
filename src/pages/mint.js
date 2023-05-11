import MintPage from "@/components/MintPage";
import Head from "next/head";
import React from "react";

const Mint = () => {
  return (
    <>
      <Head>
        <title>Mint</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MintPage />
    </>
  );
};
export default Mint;