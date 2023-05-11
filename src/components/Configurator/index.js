import React, { useEffect, useRef, useState } from "react";
import SelectItem from "./select";
import {
  Arrow,
  Body,
  Clothing,
  ContainerName,
  ContainerName2,
  ContainerSelect,
  ContainerView,
  ContainerView2,
  DemoImg,
  Eyes,
  Heads,
  Mouth,
  Name,
  Select,
  ViewBox,
  Wrapper,
} from "./views";
import { createRef } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";

const Configurator = () => {
  const [selects, setSelects] = useState({
    character: 1,
    background: 1,
    bodyVar: 1,
    clothing: 1,
    eyes: 1,
    heads: 1,
    mouth: 1,
  });

  const { background, character, bodyVar, clothing, eyes, heads, mouth } =
    selects;

  const handleSelect = (e, select, mark) => {
    const { name } = e.target;
    let limit = name === "background" ? 10 : 3;

    mark === "+"
      ? setSelects((prev) => ({
          ...prev,
          [name]: select < limit ? select + 1 : 1,
        }))
      : setSelects((prev) => ({
          ...prev,
          [name]: select > 1 ? select - 1 : limit,
        }));
  };

  const slectPerson = (v) => {
    setSelects((prev) => ({
      ...prev,
      character: v,
      bodyVar: 1,
      clothing: 1,
      eyes: 1,
      heads: 1,
      mouth: 1,
    }));
  };
  const pictureRef = createRef(null);
  const [image, takePicture] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const download = (image, { name = "NFT", extention = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extention, name);
    a.click();
  };
  const getImage = () => {
    takePicture(pictureRef.current).then(download);
    console.log("click");
  };

  return (
    <Wrapper>
      <ContainerView>
        <ContainerName>
          <Name src={"/images/Lumo.svg"} onClick={() => slectPerson(1)} />
          <Name src={"/images/Sparky.svg"} onClick={() => slectPerson(2)} />
        </ContainerName>
        <ViewBox
          ref={pictureRef}
          onClick={() => getImage()}
          bg={`/nft/background/${background}.png`}
        >
          <Body src={`/nft/${character}/bodyVar/${bodyVar}.png`} />
          <Clothing src={`/nft/${character}/clothing/${clothing}.png`} />
          <Eyes src={`/nft/${character}/eyes/${eyes}.png`} />
          <Heads src={`/nft/${character}/heads/${heads}.png`} />
          <Mouth src={`/nft/${character}/mouth/${mouth}.png`} />
        </ViewBox>

        <ContainerName>
          <Name src={"/images/Fizz.svg"} onClick={() => slectPerson(3)} />
          <Name src={"/images/Haze.svg"} onClick={() => slectPerson(4)} />
        </ContainerName>
      </ContainerView>
      <ContainerView2>
        <ViewBox bg={`/nft/background/${background}.png`}>
          <Body src={`/nft/${character}/bodyVar/${bodyVar}.png`} />
          <Clothing src={`/nft/${character}/clothing/${clothing}.png`} />
          <Eyes src={`/nft/${character}/eyes/${eyes}.png`} />
          <Heads src={`/nft/${character}/heads/${heads}.png`} />
          <Mouth src={`/nft/${character}/mouth/${mouth}.png`} />
        </ViewBox>
        <ContainerName2>
          <Name src={"/images/Lumo.svg"} onClick={() => slectPerson(1)} />
          <Name src={"/images/Sparky.svg"} onClick={() => slectPerson(2)} />
          <Name src={"/images/Fizz.svg"} onClick={() => slectPerson(3)} />
          <Name src={"/images/Haze.svg"} onClick={() => slectPerson(4)} />
        </ContainerName2>
      </ContainerView2>

      <ContainerSelect>
        {/* Select Background */}
        <SelectItem
          isBg={true}
          select={background}
          handleSelect={handleSelect}
          name="background"
        />

        {/* Select Body */}
        <SelectItem
          select={bodyVar}
          character={character}
          handleSelect={handleSelect}
          name="bodyVar"
        />
        {/* Select Clothes */}
        <SelectItem
          select={clothing}
          character={character}
          handleSelect={handleSelect}
          name="clothing"
        />
        {/* Select Eyes */}
        <SelectItem
          select={eyes}
          character={character}
          handleSelect={handleSelect}
          name="eyes"
        />
        {/* Select Head */}
        <SelectItem
          select={heads}
          character={character}
          handleSelect={handleSelect}
          name="heads"
        />
        {/* Select Mouth */}
        <SelectItem
          select={mouth}
          character={character}
          handleSelect={handleSelect}
          name="mouth"
        />
      </ContainerSelect>
    </Wrapper>
  );
};
export default Configurator;
