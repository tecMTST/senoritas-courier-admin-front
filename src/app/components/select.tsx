import React, { memo, useState } from "react";
import {
  Select as SelectMUI,
  FormControl,
  InputLabel,
  MenuItem,
  SelectProps,
} from "@mui/material";
import * as S from "../App.style";

interface Props {
  label: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  options: { label: string; value: string | number }[];
  variant: "filled" | "standard" | "outlined";
}

const Select = ({
  options,
  label,
  required,
  error,
  value,
  onChange,
  helperText,
  variant,
  ...props
}: Props & SelectProps): JSX.Element => {
  const [visited, setVisited] = useState<boolean>(!!value);

  return (
    <S.Input>
      <FormControl>
        <InputLabel required={required}>{label}</InputLabel>
        <SelectMUI
          autoWidth
          error={visited && (error || (required && !value))}
          value={value}
          onChange={onChange}
          onBlur={() => setVisited(true)}
          onFocus={() => setVisited(false)}
          variant={variant}
          {...props}
        >
          <MenuItem value="">
            <em> </em>
          </MenuItem>
          {options.map((item) => (
            <MenuItem key={Math.random()} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </SelectMUI>
        {helperText && <S.HelperText>{helperText}</S.HelperText>}
      </FormControl>
    </S.Input>
  );
};

export default memo(Select);
