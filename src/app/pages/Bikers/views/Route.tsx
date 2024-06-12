import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../../components/Button";
import Search from "../../../assets/icons/Search";
import Select from "../../../components/Inputs/select";
import Table, { Column } from "../../../components/Table";
import { OrderStatus } from "../../../utils/constants";
import { FormTDO } from "../../../utils/types";
import { MockSingleDelivery } from "../../../utils/mocks";
import RouteDetails from "../../SigleDeliveries/modal/RouteDetails";
import ArrowLeft from "../../../assets/icons/ArrowLeft";
import * as S from "../../style";
import { PropsBikers } from "..";

const Route = ({ onClick, biker, order, setId }: PropsBikers): JSX.Element => {
  const [status, setStatus] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [data, setData] = useState<FormTDO[]>();
  const [selected, setSelected] = useState<FormTDO>();
  const [openModal, setOpenModal] = useState(false);

  const getData = useCallback(() => {
    const response: FormTDO[] = MockSingleDelivery.map((item) => ({
      ...item,
      clientName: item?.client?.name,
      deliveryDate: item?.order?.deliveryDate,
      total: item?.estimatedAmounts?.totalPrice,
    }));
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

  const onRouteDetails = useCallback((item: FormTDO) => {
    setSelected(item);
    setOpenModal(true);
  }, []);

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
          id: "route",
          label: "Rota",
          orderBy: true,
        },
        {
          id: "clientName",
          label: "Destinatário",
          orderBy: true,
        },
        {
          id: "status",
          label: "Status da entrega",
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
        text: "Ver detalhes de rota",
        onClick: onRouteDetails,
      },
    ],
    [onRouteDetails]
  );

  return (
    <>
      <Button
        inline
        startIcon
        text="Voltar"
        icon={<ArrowLeft />}
        onClick={() => {
          if (setId) setId(undefined);
          onClick("order");
        }}
      />
      <S.Row className="space-between">
        <S.Path>
          <label className="first">{`Biker / ${biker} / `}</label>
          <label className="last">{order}</label>
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

      <RouteDetails
        open={openModal}
        onClose={onClose}
        onSave={onSave}
        data={selected}
      />
    </>
  );
};

export default memo(Route);
