import React, { Dispatch, SetStateAction, memo, useState } from "react";
import { InputAdornment } from "@mui/material";
import { FormTDO, Payment } from "../../../utils/types";
import TextField from "../../../components/Inputs/textField";
import Select from "../../../components/Inputs/select";
import Button from "../../../components/Button";
import Plus from "../../../assets/icons/Plus";
import Close from "../../../assets/icons/Close";
import * as S from "./style";

interface Props {
  data?: FormTDO;
}

interface PropsEdit {
  total?: number;
  aditional?: number;
  setTotal: Dispatch<SetStateAction<number>>;
  setAditional: Dispatch<SetStateAction<number>>;
}

interface PropsAdd {
  payments: Payment[];
  setPayments: Dispatch<SetStateAction<Payment[]>>;
}

const EditPayments = ({
  total,
  aditional,
  setTotal,
  setAditional,
}: PropsEdit): JSX.Element => (
  <S.Container $padding="0 40px">
    <S.Column $gap={16}>
      <TextField
        className="mask"
        id="total"
        text="Subtotal do item"
        value={total}
        onChange={(e) => setTotal(Number(e.target.value))}
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
        }}
      />
      <TextField
        className="mask"
        id="aditional"
        text="Adicionais"
        value={aditional}
        onChange={(e) => setAditional(Number(e.target.value))}
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
        }}
      />
    </S.Column>
  </S.Container>
);

const AddPayments = ({ payments, setPayments }: PropsAdd): JSX.Element => (
  <>
    <S.Container $padding="0 40px">
      <S.Row $padding=" 48px 0 8px 0">
        <S.Title>Adicionar detalhes de pagamento</S.Title>
      </S.Row>
    </S.Container>
    <S.Divider $width="100%" />
    <S.Container $padding="0 40px 48px 40px">
      <S.Row $justifyContent="normal" $alignItems="end" $gap={48}>
        <Button
          primary
          text="Adicionar pagamento"
          icon={<Plus />}
          onClick={() => alert("Adicionar pagamento")}
          className="has-icon"
        />
        <Select
          classname="without-label"
          variant="outlined"
          label="Novo pagamento"
          options={[{ label: "Pix", value: "Pix" }]}
        />
        <TextField
          id="value"
          text="Valor adicional"
          className="mask"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
          }}
        />
        <Button
          inline
          text="Excluir"
          icon={<Close />}
          onClick={() => alert("Adicionar pagamento")}
        />
      </S.Row>
    </S.Container>
  </>
);

const EditPayment = ({ data }: Props): JSX.Element => {
  const [total, setTotal] = useState<number>(data?.total ?? 0);
  const [aditional, setAditional] = useState<number>(
    (data?.total ?? 0) - (data?.estimatedAmounts?.mainPrice ?? 0) ?? 0
  );
  const [payments, setPayments] = useState<Payment[]>(
    data?.payment?.payments ?? []
  );

  return (
    <>
      <EditPayments
        total={total}
        aditional={aditional}
        setTotal={setTotal}
        setAditional={setAditional}
      />
      <AddPayments payments={payments} setPayments={setPayments} />
    </>
  );
};

export default memo(EditPayment);
