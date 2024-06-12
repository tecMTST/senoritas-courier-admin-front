import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../../components/Button";
import ArrowLeft from "../../../assets/icons/ArrowLeft";
import Search from "../../../assets/icons/Search";
import Select from "../../../components/Inputs/select";
import Table, { Column } from "../../../components/Table";
import { OrderStatus } from "../../../utils/constants";
import { FormTDO } from "../../../utils/types";
import { MockOrders } from "../../../utils/mocks";
import { PropsBikers } from "..";
import * as S from "../../style";

const Order = ({ onClick, biker, setId }: PropsBikers): JSX.Element => {
  const [status, setStatus] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [data, setData] = useState<FormTDO[]>();

  const getData = useCallback(() => {
    const response = MockOrders;
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

  const onChangeOrderBy = useCallback(
    ({ target: { value } }: { target: { value: unknown } }) =>
      setOrderBy(value as string),
    []
  );

  const columns = useMemo(
    () =>
      [
        {
          id: "itinerary",
          label: "Atribuídos",
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
          id: "deliveryDate",
          label: "Data de entrega",
          orderBy: true,
        },
        {
          id: "actions",
          type: "action",
        },
      ] as Column[],
    []
  );

  const actions = useMemo(
    () => [
      {
        type: "primary",
        text: "Ver detalhes do roteiro",
        onClick: (item: { [x: string]: string | number }) => {
          if (setId) setId(item?.itinerary as string);
          onClick("route");
        },
      },
    ],
    [onClick, setId]
  );

  return (
    <>
      <Button
        inline
        startIcon
        text="Voltar"
        icon={<ArrowLeft />}
        onClick={() => onClick("list")}
      />
      <S.Row className="space-between">
        <S.Path>
          <label className="first">{`Biker / `}</label>
          <label className="last">{biker}</label>
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
          label="Status da entrega"
          options={OrderStatus}
          value={status}
          onChange={onChangeStatus}
        />
        <Select
          variant="outlined"
          label="Ordenar por"
          options={columns
            .filter((item) => item?.id !== "actions")
            .map((item) => ({
              label: item?.label ?? "",
              value: item?.id ?? "",
            }))}
          value={orderBy}
          onChange={onChangeOrderBy}
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

export default memo(Order);
