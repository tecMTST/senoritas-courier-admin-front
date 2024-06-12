import React, { HTMLAttributes, memo } from "react";
import * as S from "./style";

interface Props {
  text: string;
  icon?: JSX.Element;
  disabled?: boolean;
  primary?: boolean;
  inline?: boolean;
  startIcon?: boolean;
}

const Button = ({
  text,
  icon,
  disabled,
  primary,
  inline,
  startIcon,
  ...props
}: HTMLAttributes<any> & Props): JSX.Element => (
  <S.Button
    type="button"
    disabled={disabled}
    $primary={primary}
    $inline={inline}
    {...props}
  >
    {icon && startIcon && <S.Icon>{icon}</S.Icon>}
    <span>{text}</span>
    {icon && !startIcon && <S.Icon>{icon}</S.Icon>}
  </S.Button>
);

export default memo(Button);
