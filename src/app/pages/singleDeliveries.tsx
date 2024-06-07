import React, { memo, useCallback, useMemo, useState } from "react";
import Search from "../assets/icons/Search";
import Button from "../components/Button";
import Select from "../components/Inputs/select";
import Table, { Column } from "../components/Table";
import RouteDetails from "./modal/RouteDetails";
import * as S from "./style";

interface Data {
  order: string;
  client: string;
  total: string;
  status: string;
  orderDate: string;
  deliveryDate: string;
  biker: string;
}

const rows = [
  {
    order: "#202403001",
    client: "Bruna Queiroz",
    total: "R$ 65,43",
    status: "Solicitado",
    orderDate: "13/03/2023",
    deliveryDate: "18/03/2023",
    biker: "Biker A",
  },
  {
    order: "#202403002",
    client: "Luísa Santos",
    total: "R$ 65,43",
    status: "Atribuído",
    orderDate: "13/03/2023",
    deliveryDate: "18/03/2023",
    biker: "Biker B",
  },
  {
    order: "#202403003",
    client: "Carla Pereira",
    total: "R$ 65,43",
    status: "Suspenso",
    orderDate: "13/03/2023",
    deliveryDate: "18/03/2023",
    biker: "Biker C",
  },
  {
    order: "#202403004",
    client: "Janna Ortega",
    total: "R$ 65,43",
    status: "Em andamento",
    orderDate: "13/03/2023",
    deliveryDate: "18/03/2023",
    biker: "Biker D",
  },
];

const OptionsStatus = [
  { label: "Solicitado", value: "Solicitado" },
  { label: "Atribuído", value: "Atribuído" },
  { label: "Suspenso/no aguardo", value: "Suspenso/no aguardo" },
  { label: "Em andamento", value: "Em andamento" },
  { label: "Concluído", value: "Concluído" },
  { label: "Cancelado", value: "Cancelado" },
];

const OptionsBikers = [
  { label: "Biker A", value: "Biker A" },
  { label: "Biker B", value: "Biker B" },
  { label: "Biker C", value: "Biker C" },
  { label: "Biker D", value: "Biker D" },
  { label: "Biker E", value: "Biker E" },
];

const SingleDeliveries = (): JSX.Element => {
  const [status, setStatus] = useState("");
  const [biker, setBiker] = useState("");
  const [data, setData] = useState(rows);
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState<Data>();

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
      const newData = [...data];
      newData[index].biker = value;
      setData(newData);
    },
    [data]
  );

  const onRouteDetails = useCallback(
    (item: { [x: string]: string | number }) => {
      setOpenModal(true);
      setSelected(item as unknown as Data);
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
          id: "order",
          label: "Código",
        },
        {
          id: "orderDate",
          label: "Pedido",
          orderBy: true,
        },
        {
          id: "client",
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
          options={OptionsStatus}
          value={status}
          onChange={onChangeStatus}
        />
        <Select
          variant="outlined"
          label="Biker"
          options={OptionsBikers}
          value={biker}
          onChange={onChangeBiker}
        />
      </S.Row>

      <Table
        boldHead
        borderHead
        columns={columns}
        rows={data}
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
