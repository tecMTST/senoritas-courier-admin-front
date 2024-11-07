import React, { memo, useState } from "react";
import {
  Select as SelectMUI,
  FormControl,
  InputLabel,
  MenuItem,
  SelectProps,
} from "@mui/material";
import * as S from "./style";

interface Props {
  label: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  options: { icon?: JSX.Element; label: string; value: string | number }[];
  variant: "filled" | "standard" | "outlined";
  classname?: string;
  width?: string
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
  classname,
  width,
  ...props
}: Props & SelectProps): JSX.Element => {
  const [visited, setVisited] = useState<boolean>(!!value);

  return (
    <S.Input className={classname ?? ""} $width={width}>
      {classname === "without-label" && (
        <S.Label $variant="standard">{label}</S.Label>
      )}
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
              {item?.icon && item?.icon}
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
