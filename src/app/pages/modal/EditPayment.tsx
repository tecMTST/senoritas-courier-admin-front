import React, { Dispatch, SetStateAction, memo, useState } from "react";
import { Data, Payment } from "../../utils/types";
import TextField from "../../components/Inputs/textField";
import * as S from "./style";
import Select from "../../components/Inputs/select";
import Button from "../../components/Button";
import Plus from "../../assets/icons/Plus";
import Close from "../../assets/icons/Close";

interface Props {
  data?: Data;
}

interface PropsEdit {
  total?: string;
  aditional?: string;
  setTotal: Dispatch<SetStateAction<string>>;
  setAditional: Dispatch<SetStateAction<string>>;
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
        id="total"
        text="Subtotal do item"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      <TextField
        id="aditional"
        text="Adicionais"
        value={aditional}
        onChange={(e) => setAditional(e.target.value)}
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
        <TextField id="value" text="Valor adicional" />
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
  const [total, setTotal] = useState<string>(data?.total ?? "");
  const [aditional, setAditional] = useState<string>(data?.pickupAddress ?? "");
  const [payments, setPayments] = useState<Payment[]>(data?.payments ?? []);

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
