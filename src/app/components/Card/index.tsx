import React, { memo } from "react";
import * as S from "./style";

interface Props {
  image?: string;
  title: string;
  description: string;
  value: string;
}

const Card = ({ image, title, description, value }: Props): JSX.Element => (
  <S.Card>
    {image && (
      <S.Image>
        <img src={image} alt="imagem" />
      </S.Image>
    )}
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Value>{value}</S.Value>
  </S.Card>
);

export default memo(Card);
