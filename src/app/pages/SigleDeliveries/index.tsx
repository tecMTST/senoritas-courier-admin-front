import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Search from "../../assets/icons/Search";
import Button from "../../components/Button";
import Select from "../../components/Inputs/select";
import Table, { Column } from "../../components/Table";
import { FormTDO } from "../../utils/types";
import { OrderStatus } from "../../utils/constants";
import { MockOptionsBikers, MockSingleDelivery } from "../../utils/mocks";
import RouteDetails from "./modal/RouteDetails";
import * as S from "../style";

const SingleDeliveries = (): JSX.Element => {
  const [status, setStatus] = useState("");
  const [biker, setBiker] = useState("");
  const [data, setData] = useState<FormTDO[]>();
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState<FormTDO>();

  useEffect(() => {
    console.log(MockSingleDelivery);
    const response: FormTDO[] = MockSingleDelivery?.map((item) => ({
      ...item,
      clientName: item?.client?.name,
      deliveryDate: item?.order?.deliveryDate,
      total: item?.estimatedAmounts?.totalPrice,
      payment: {
        status: "Aprovado",
        payments: [{ type: "PIX", value: "R$ 65,43" }],
      },
    }));
    setData(response);
  }, []);

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

  const onChangeBikerData = useCallback(
    (value: string, index: number) => {
      const newData = [...(data ?? [])];
      newData[index].biker = value;
      setData(newData);
    },
    [data]
  );

  const onRouteDetails = useCallback(
    (item: { [x: string]: string | number }) => {
      setOpenModal(true);
      setSelected(item);
    },
    []
  );

  const onClose = useCallback(() => {
    setOpenModal(false);
    setSelected(undefined);
  }, []);

  const onSave = useCallback(() => {
    alert("Salvar e sair");
    onClose();
  }, [onClose]);

  const columns = useMemo(
    () =>
      [
        {
          id: "code",
          label: "Código",
        },
        {
          id: "createdAt",
          label: "Pedido",
          orderBy: true,
        },
        {
          id: "clientName",
          label: "Cliente",
          orderBy: true,
        },
        {
          id: "total",
          label: "Total",
          orderBy: true,
        },
        {
          id: "status",
          label: "Status",
          orderBy: true,
        },
        {
          id: "deliveryDate",
          label: "Data de entrega",
          orderBy: true,
        },
        {
          id: "biker",
          label: "Biker",
          orderBy: true,
          type: "select",
          values: [
            { label: "Biker A", value: "Biker A" },
            { label: "Biker B", value: "Biker B" },
            { label: "Biker C", value: "Biker C" },
            { label: "Biker D", value: "Biker D" },
          ],
          onChange: onChangeBikerData,
        },
        {
          id: "actions",
          type: "action",
        },
      ] as Column[],
    [onChangeBikerData]
  );

  const actions = useMemo(
    () => [
      {
        type: "primary",
        text: "Ver detalhes da rota",
        onClick: onRouteDetails,
      },
    ],
    [onRouteDetails]
  );

  return (
    <>
      <S.Row className="space-between">
        <S.Title>Entregas avulsas</S.Title>
        <Button
          text="Buscar por pedido ou cliente"
          icon={<Search color="#00B596" />}
          onClick={() => alert("buscar")}
        />
      </S.Row>
      <S.Row>
        <Select
          variant="outlined"
          label="Status"
          options={OrderStatus}
          value={status}
          onChange={onChangeStatus}
        />
        <Select
          variant="outlined"
          label="Biker"
          options={MockOptionsBikers}
          value={biker}
          onChange={onChangeBiker}
        />
      </S.Row>

      <Table
        boldHead
        borderHead
        columns={columns}
        rows={data as { [x: string]: string | number }[]}
        actions={actions}
      />

      <RouteDetails
        open={openModal}
        onClose={onClose}
        onSave={onSave}
        data={selected}
      />
    </>
  );
};

export default memo(SingleDeliveries);
