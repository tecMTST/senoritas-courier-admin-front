import React, { memo, useState } from "react";
import { TextField as TextFieldMUI, TextFieldProps } from "@mui/material";
import * as S from "./style";

interface Props {
  id: string;
  text: string;
  error?: boolean;
  maxLength?: number;
  width?: string;
}

const TextArea = ({
  id,
  text,
  error,
  maxLength,
  required,
  value,
  width,
  ...props
}: Props & Omit<TextFieldProps, "variant">): JSX.Element => {
  const [visited, setVisited] = useState<boolean>(!!value);

  return (
    <S.Input
      onBlur={() => setVisited(true)}
      onFocus={() => setVisited(false)}
      $width={width}
    >
      <S.Label>{text}</S.Label>
      <TextFieldMUI
        multiline
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

export default memo(TextArea);
