import React, { memo } from "react";
import { CircularProgress } from "@mui/material";
import * as S from "./style";

interface Props {
  loading: boolean;
}

const Loading = ({ loading }: Props): JSX.Element | null =>
  loading ? (
    <S.Loading>
      <CircularProgress />
    </S.Loading>
  ) : null;

export default memo(Loading);
