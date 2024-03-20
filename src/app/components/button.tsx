import React, { HTMLAttributes, memo } from "react";
import * as S from "../App.style";

interface Props {
  text: string;
  icon?: JSX.Element;
  disabled?: boolean;
  primary?: boolean;
}

const Button = ({
  text,
  icon,
  disabled,
  primary,
  ...props
}: HTMLAttributes<any> & Props): JSX.Element => (
  <S.Button type="button" disabled={disabled} $primary={primary} {...props}>
    <span>{text}</span>
    {icon && <S.IconButton>{icon}</S.IconButton>}
  </S.Button>
);

export default memo(Button);
