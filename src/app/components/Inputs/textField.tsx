import React, { memo, useState } from "react";
import {
  InputAdornment,
  TextField as TextFieldMUI,
  TextFieldProps,
} from "@mui/material";
import * as S from "./style";

interface Props {
  id: string;
  icon?: JSX.Element;
  inputColor?: string;
  text?: string;
  error?: boolean;
  maxLength?: number;
  width?: string;
  variant?: "filled" | "outlined" | "standard";
}

const TextField = ({
  id,
  icon,
  inputColor,
  text,
  error,
  maxLength,
  required,
  value,
  width,
  variant,
  ...props
}: Props & Omit<TextFieldProps, "variant">): JSX.Element => {
  const [visited, setVisited] = useState<boolean>(!!value);

  return (
    <S.Input
      onBlur={() => setVisited(true)}
      onFocus={() => setVisited(false)}
      $variant={variant ?? "outlined"}
      $width={width}
      $color={inputColor}
    >
      {text && <S.Label $variant={variant ?? "outlined"}>{text}</S.Label>}
      <TextFieldMUI
        id={id}
        variant={variant ?? "outlined"}
        inputProps={{ maxLength }}
        error={visited && (error || (required && !value))}
        value={value}
        InputProps={
          icon
            ? {
                endAdornment: (
                  <InputAdornment position="end">{icon}</InputAdornment>
                ),
              }
            : undefined
        }
        {...props}
      />
    </S.Input>
  );
};

export default memo(TextField);
