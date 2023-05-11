import React, { useState } from "react";
import {
  BlockOne,
  Button,
  Button1,
  Congrats,
  CongratsText,
  Image1,
  Image2,
  Input,
  InputWrapper,
  Text,
  Title,
  Wrapper,
  Wrong,
} from "./views";
import axios from "axios";

const RaffleForm = () => {
  const [view, setView] = useState(true);
  const [wrong, setWrong] = useState(false);
  const [wrong2, setWrong2] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [inputData, setInputData] = useState({
    first: "",
    second: "",
  });

  const { first, second } = inputData;
  const password = process.env.NEXT_PUBLIC_ENV_VARIABLE;

  const inputHandler = (e) => {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputData);
  };

  const enter = () => {
    first === password ? [setVisible(true), setWrong(false)] : setWrong(true);
  };
  const enter2 = () => {
    second.length
      ? [
          setView(false),
          fetch(
            "https://script.google.com/macros/s/AKfycbzr7AjxG0zxJYlka4gNHr6e9podfYKeLTNX1qVdBXG9JbgYpv6PFwN0z4Ile0bRTvWY/exec",
            {
              method: "POST",
              mode: "no-cors",
              // prettier-ignore
              body: JSON.stringify({
          "first": first,
          "second": second,
        }),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          ),
        ]
      : setWrong2(true);
  };
  const follow = () => {
    window.open("https://twitter.com/trippysticknft", "_blank");
    setVisible2(true);
  };

  return (
    <>
      {view ? (
        <Wrapper pad={visible}>
          <Title src="/images/Raffle1.svg" alt="asd" />
          <Image1 src="/images/Fly.png" />
          <BlockOne pad={visible2}>
            <Text>@trippysticknft</Text>
            <Button1 onClick={follow}>follow</Button1>
          </BlockOne>
          {visible2 && (
            <>
              <InputWrapper>
                <Input
                  placeholder="Password"
                  onChange={inputHandler}
                  name="first"
                  value={first}
                />
                {wrong && <Wrong>wrong password</Wrong>}
              </InputWrapper>

              <Button onClick={enter}>Enter</Button>
            </>
          )}

          {visible && (
            <>
              <InputWrapper>
                <Input
                  placeholder="0x000000000trippystickLFG0000"
                  onChange={inputHandler}
                  name="second"
                  value={second}
                />
                {wrong2 && <Wrong>EMPTY?</Wrong>}
              </InputWrapper>

              <Button onClick={enter2}>Enter</Button>
            </>
          )}
        </Wrapper>
      ) : (
        <Congrats>
          <CongratsText>
            trippylations!
            <br /> you are participating in the raffle!
          </CongratsText>
          <Image2 src="/images/Stars.svg" />
        </Congrats>
      )}
    </>
  );
};
export default RaffleForm;
