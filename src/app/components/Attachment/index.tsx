import React, { HTMLAttributes, memo } from "react";
import PlusImage from "../../assets/icons/PlusImage";
import * as S from "./style";

interface Props {
  disabled?: boolean;
}

const Attachment = ({
  disabled,
  ...props
}: HTMLAttributes<any> & Props): JSX.Element => (
  <S.Attachment disabled={disabled}>
    <label htmlFor="addFile">
      <PlusImage />
    </label>
    <input
      id="addFile"
      accept={"image/*"}
      type="file"
      multiple={false}
      {...props}
    />
    <S.Label htmlFor="addFile">Adicionar imagem</S.Label>
  </S.Attachment>
);

export default memo(Attachment);
