import React from "react";
import Configurator from "../Configurator";
import FirstBlock from "../FirstBlock";
import FourthBlock from "../FourthBlock";
import Header from "../Header";
import SecondBlock from "../SecondBlock";
import ThirdBlock from "../ThirdBlock";
import { Wrapper } from "./views";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <Configurator />
      <FourthBlock />
    </Wrapper>
  );
};
export default MainPage;
