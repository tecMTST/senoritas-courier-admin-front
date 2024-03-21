import React, { memo, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import MenuIcon from "../../assets/icons/MenuIcon";
import * as S from "./style";

const Menu = (): JSX.Element => {
  const history = useHistory();
  const [selected, setSelected] = useState(
    history.location.pathname.replace("/", "") ?? ""
  );

  const items: {
    id: string;
    text: string;
    onClick: (id: string) => void;
    position: "top" | "bottom";
  }[] = useMemo(
    () => [
      {
        id: "entregas-avulsas",
        text: "Entregas avulsas",
        onClick: (id) => {
          history.push("/entregas-avulsas");
          setSelected(id);
        },
        position: "top",
      },
      {
        id: "entregas-multiplas",
        text: "Entregas múltiplas",
        onClick: (id) => {
          history.push("/entregas-multiplas");
          setSelected(id);
        },
        position: "top",
      },
      {
        id: "bikers",
        text: "Bikers",
        onClick: (id) => {
          history.push("/bikers");
          setSelected(id);
        },
        position: "top",
      },
      {
        id: "clientes",
        text: "Clientes",
        onClick: (id) => {
          history.push("/clientes");
          setSelected(id);
        },
        position: "top",
      },
      {
        id: "nav-item-1",
        text: "Nav Item",
        onClick: (id) => {
          history.push("/nav-item-1");
          setSelected(id);
        },
        position: "bottom",
      },
      {
        id: "nav-item-2",
        text: "Nav Item",
        onClick: (id) => {
          history.push("/nav-item-2");
          setSelected(id);
        },
        position: "bottom",
      },
    ],
    [history]
  );

  return (
    <S.Menu>
      <S.Top>
        {items
          ?.filter((item) => item?.position === "top")
          ?.map((item) => (
            <S.Item
              key={Math.random()}
              onClick={() => item?.onClick(item?.id)}
              $selected={item?.id === selected}
            >
              <MenuIcon />
              <S.Label>{item?.text}</S.Label>
            </S.Item>
          ))}
      </S.Top>
      <S.Bottom>
        {items
          ?.filter((item) => item?.position === "bottom")
          ?.map((item) => (
            <S.Item
              key={Math.random()}
              onClick={() => item?.onClick(item?.id)}
              $selected={item?.id === selected}
            >
              <MenuIcon />
              <S.Label>{item?.text}</S.Label>
            </S.Item>
          ))}
      </S.Bottom>
    </S.Menu>
  );
};

export default memo(Menu);
