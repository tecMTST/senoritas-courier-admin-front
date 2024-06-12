import React, { HTMLAttributes, memo } from "react";
import PlusImage from "../../assets/icons/PlusImage";
import * as S from "./style";

interface Props {
  disabled?: boolean;
  value?: string;
}

const Attachment = ({
  disabled,
  value,
  ...props
}: HTMLAttributes<any> & Props): JSX.Element => (
  <S.Attachment disabled={disabled} className={value ? "with-value" : ""}>
    {value ? (
      <>
        <img
          src={
            "https://public-static-cms-270de735.s3.us-east-1.amazonaws.com/large_Senoritas_Courrier_01052024_046_8b6c7769b9.jpg"
          }
          alt="imagem"
          width={96}
          height={96}
        />
        <input
          id="addFile"
          accept={"image/*"}
          type="file"
          multiple={false}
          {...props}
        />
      </>
    ) : (
      <>
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
      </>
    )}
  </S.Attachment>
);

export default memo(Attachment);
