import React, { memo, useCallback, useMemo, useState } from "react";
import Search from "../assets/icons/Search";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Select from "../components/Inputs/select";
import * as S from "./style";

const SingleDeliveries = (): JSX.Element => {
  const [status, setStatus] = useState("");
  const [biker, setBiker] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const onChangeStatus = useCallback(
    ({ target: { value } }: { target: { value: unknown } }) =>
      setStatus(value as string),
    []
  );

  const onChangeBiker = useCallback(
    ({ target: { value } }: { target: { value: unknown } }) =>
      setBiker(value as string),
    []
  );

  const onChangeModal = useCallback(() => setOpenModal((prev) => !prev), []);

  const onExport = useCallback(() => console.log("exportar"), []);

  const buttons = useMemo(
    () => [
      {
        text: "Exportar",
        onClick: onExport,
        primary: true,
      },
    ],
    [onExport]
  );

  return (
    <>
      <S.Row className="space-between">
        <S.Title>Entregas avulsas</S.Title>
        <Button
          text="Buscar por pedido ou cliente"
          icon={<Search color="#00B596" />}
          onClick={onChangeModal}
        />
      </S.Row>
      <S.Row>
        <Select
          variant="outlined"
          label="Status"
          options={[{ label: "Outros", value: "others" }]}
          value={status}
          onChange={onChangeStatus}
        />
        <Select
          variant="outlined"
          label="Biker"
          options={[{ label: "Outros", value: "others" }]}
          value={biker}
          onChange={onChangeBiker}
        />
      </S.Row>
      <Modal
        open={openModal}
        onClose={onChangeModal}
        buttons={buttons}
        title="Pedido A"
      >
        <>
          <div>detalhes</div>
        </>
      </Modal>
    </>
  );
};

export default memo(SingleDeliveries);
