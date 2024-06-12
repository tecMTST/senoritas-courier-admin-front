import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { MockClients, MockMultiple } from "../../../utils/mocks";
import { OptionsStatus } from "../../../utils/constants";
import Button from "../../../components/Button";
import Select from "../../../components/Inputs/select";
import Table, { Column } from "../../../components/Table";
import Search from "../../../assets/icons/Search";
import { PropsMultiple } from "..";
import * as S from "../../style";

const List = ({ onClick, setId }: PropsMultiple): JSX.Element => {
  const [status, setStatus] = useState("");
  const [client, setClient] = useState("");
  const [data, setData] = useState<any[]>();

  const getData = useCallback(() => {
    const response = MockMultiple;
    setData(response);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const onChangeStatus = useCallback(
    ({ target: { value } }: { target: { value: unknown } }) =>
      setStatus(value as string),
    []
  );

  const onChangeClient = useCallback(
    ({ target: { value } }: { target: { value: unknown } }) =>
      setClient(value as string),
    []
  );

  const onChangeStatusData = useCallback(
    (value: string, index: number) => {
      const newData = [...(data ?? [])];
      newData[index].status = value;
      setData(newData);
    },
    [data]
  );

  const columns = useMemo(
    () =>
      [
        {
          id: "order",
          label: "Pedido",
          orderBy: true,
        },
        {
          id: "client",
          label: "Cliente",
          orderBy: true,
        },
        {
          id: "contact",
          label: "Contato",
          orderBy: true,
        },
        {
          id: "status",
          label: "Status solicitação",
          orderBy: true,
          type: "select",
          values: OptionsStatus,
          onChange: onChangeStatusData,
        },
        {
          id: "deliveryDate",
          label: "Data de entrega",
          orderBy: true,
        },
        {
          id: "total",
          label: "Total",
          orderBy: true,
        },
        {
          id: "payment",
          label: "Status pagamento",
          orderBy: true,
        },
        {
          id: "actions",
          type: "action",
        },
      ] as Column[],
    [onChangeStatusData]
  );

  const actions = useMemo(
    () => [
      {
        type: "primary",
        text: "Ver pedido",
        onClick: (item: { [x: string]: string | number }) => {
          if (setId) setId(item?.order as string);
          onClick("order");
        },
      },
    ],
    [onClick, setId]
  );

  return (
    <>
      <S.Row className="space-between">
        <S.Path>
          <label className="first">Entregas múltiplas / </label>
          <label className="last">Pedidos</label>
        </S.Path>
        <Button
          text="Buscar"
          icon={<Search color="#00B596" />}
          onClick={() => alert("buscar")}
        />
      </S.Row>
      <S.Row>
        <Select
          variant="outlined"
          label="Status de solicitações"
          options={OptionsStatus}
          value={status}
          onChange={onChangeStatus}
        />
        <Select
          variant="outlined"
          label="Cliente"
          options={MockClients.map((item) => ({
            label: item?.client ?? "",
            value: item?.client ?? "",
          }))}
          value={client}
          onChange={onChangeClient}
        />
      </S.Row>

      <Table
        boldHead
        borderHead
        columns={columns}
        rows={data as { [x: string]: string | number }[]}
        actions={actions}
      />
    </>
  );
};

export default memo(List);
