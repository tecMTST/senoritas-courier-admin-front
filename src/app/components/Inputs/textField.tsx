import React, { memo, useState } from "react";
import { TextField as TextFieldMUI, TextFieldProps } from "@mui/material";
import * as S from "./style";

interface Props {
  id: string;
  text: string;
  error?: boolean;
  maxLength?: number;
}

const TextField = ({
  id,
  text,
  error,
  maxLength,
  required,
  value,
  ...props
}: Props & Omit<TextFieldProps, "variant">): JSX.Element => {
  const [visited, setVisited] = useState<boolean>(!!value);

  return (
    <S.Input onBlur={() => setVisited(true)} onFocus={() => setVisited(false)}>
      <S.Label>{text}</S.Label>
      <TextFieldMUI
        id={id}
        variant="outlined"
        inputProps={{ maxLength }}
        error={visited && (error || (required && !value))}
        value={value}
        {...props}
      />
    </S.Input>
  );
};

export default memo(TextField);
