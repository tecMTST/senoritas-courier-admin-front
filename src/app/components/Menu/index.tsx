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
    hasIcon?: boolean;
  }[] = useMemo(
    () => [
      {
        id: "entregas-avulsas",
        text: "Entregas avulsas",
        onClick: (id) => {
          history.push("/entregas-avulsas");
          setSelected(id);
        },
      },
      {
        id: "entregas-multiplas",
        text: "Entregas múltiplas",
        onClick: (id) => {
          history.push("/entregas-multiplas");
          setSelected(id);
        },
      },
      {
        id: "bikers",
        text: "Bikers",
        onClick: (id) => {
          history.push("/bikers");
          setSelected(id);
        },
      },
      {
        id: "clientes",
        text: "Clientes",
        onClick: (id) => {
          history.push("/clientes");
          setSelected(id);
        },
      },
    ],
    [history]
  );

  return (
    <S.Menu>
      <S.Items>
        {items?.map((item) => (
          <S.Item
            key={Math.random()}
            onClick={() => item?.onClick(item?.id)}
            $selected={item?.id === selected}
          >
            {item?.hasIcon && <MenuIcon />}
            <S.Label>{item?.text}</S.Label>
          </S.Item>
        ))}
      </S.Items>
    </S.Menu>
  );
};

export default memo(Menu);
