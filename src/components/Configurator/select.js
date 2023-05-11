import React from "react";
import { Arrow, DemoImg, Select } from "./views";

const SelectItem = ({ isBg, select, character, handleSelect, name }) => {
  return (
    <Select>
      <Arrow
        src="/images/Left.svg"
        name={name}
        onClick={(e) => handleSelect(e, select, "-")}
      />
      <DemoImg
        clothing={name}
        src={
          isBg
            ? `/nft/background/${select}.png`
            : `/nft/${character}/${name}/${select}.png`
        }
      />
      <Arrow
        src="/images/Right.svg"
        name={name}
        onClick={(e) => handleSelect(e, select, "+")}
      />
    </Select>
  );
};
export default SelectItem;
