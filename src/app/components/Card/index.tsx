import React, { memo } from "react";
import * as S from "./style";

interface Props {
  image: string;
  title: string;
  description: string;
  status: string;
}

const Card = ({ image, title, description, status }: Props): JSX.Element => (
  <S.Card>
    <S.Image>
      <img src={image} alt="imagem" />
    </S.Image>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Status>{status}</S.Status>
  </S.Card>
);

export default memo(Card);
