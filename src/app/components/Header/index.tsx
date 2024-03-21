import React, { memo, useMemo, useState } from "react";
import MenuIcon from "../../assets/icons/MenuIcon";
import * as S from "./style";

const Header = (): JSX.Element => {
  const [selected, setSelected] = useState(0);

  const tabs = useMemo(
    () => [
      {
        text: "Tab",
        onClick: setSelected,
      },
      {
        text: "Tab",
        onClick: setSelected,
      },
      {
        text: "Tab",
        onClick: setSelected,
      },
      {
        text: "Tab",
        onClick: setSelected,
      },
      {
        text: "Tab",
        onClick: setSelected,
      },
      {
        text: "Tab",
        onClick: setSelected,
      },
    ],
    []
  );

  const buttons: {
    text: string;
    type: "primary" | "secondary";
    onClick: () => void;
  }[] = useMemo(
    () => [
      {
        text: "Button 1",
        type: "secondary",
        onClick: () => console.log("click button 1"),
      },
      {
        text: "Button 2",
        type: "primary",
        onClick: () => console.log("click button 2"),
      },
    ],
    []
  );

  return (
    <S.Header>
      <S.Logo>logo</S.Logo>
      <S.Items>
        {tabs?.map((tab, index) => (
          <S.Tab
            key={Math.random()}
            onClick={() => tab?.onClick(index)}
            $selected={selected === index}
          >
            <MenuIcon color={selected === index ? "#00b596" : "#717d96"} />
            <S.Label>{tab?.text}</S.Label>
          </S.Tab>
        ))}
        {buttons?.map((button) => (
          <S.Button
            key={Math.random()}
            onClick={button?.onClick}
            $type={button?.type}
          >
            <S.Label>{button?.text}</S.Label>
          </S.Button>
        ))}
      </S.Items>
    </S.Header>
  );
};

export default memo(Header);
