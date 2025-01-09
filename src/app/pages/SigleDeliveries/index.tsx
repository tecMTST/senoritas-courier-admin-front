import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import moment from "moment";
import Search from "../../assets/icons/Search";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Select from "../../components/Inputs/select";
import Table, { Column } from "../../components/Table";
import { OrderStatus } from "../../utils/constants";
import {
  approveOrder,
  getBiker,
  getItineraryByOder,
  getOrder,
  updateItinerary,
} from "../../services/api";
import { Biker, OrderFormTDO, OrderTDO } from "../../utils/types";
import View from "./modal/View";
import Dot from "../../assets/icons/Dot";
import TextField from "../../components/Inputs/textField";
import * as S from "../style";

const SingleDeliveries = (): JSX.Element => {
  const [filters, setFilters] = useState<{
    status?: string;
    biker?: string;
    client?: string;
  }>();

  const [bikers, setBikers] = useState<Biker[]>([]);

  const [data, setData] = useState<OrderFormTDO[]>();
  const [dataFiltered, setDataFiltered] = useState<OrderFormTDO[]>();

  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState<OrderFormTDO>();

  const [loading, setLoading] = useState(true);

  const getOptions = useCallback(
    (value: any, hasAllOptions?: boolean, hasIcon?: boolean) => {
      const allOption = {
        icon: hasIcon ? <Dot color="white" /> : undefined,
        label: "Todos",
        value: "",
      };

      const options = value.map(
        (item: { id?: string; name?: string; text?: string }) => ({
          ...item,
          label: item?.text ?? item?.name,
          value: item?.text ?? item?.id,
        })
      );

      if (hasAllOptions) options.unshift(allOption);

      return options;
    },
    []
  );

  const getStatus = useCallback((approved?: boolean | null) => {
    if (approved === undefined || approved === null) return "Em aprovação";

    if (!approved) return "Cancelado";

    return "Aprovado";
  }, []);

  const getDataFiltered = useCallback(
    (value?: OrderFormTDO[]) => {
      const { biker, client, status } = filters ?? {};

      const filtered = (value ?? data)?.filter(
        (item) =>
          (!client ||
            item?.clientName?.toLowerCase()?.includes(client.toLowerCase())) &&
          (!status || status === "Todos" || item?.orderStatus === status) &&
          (!biker || biker === "Todos" || item?.bikerId === biker)
      );
      setDataFiltered(filtered);
    },
    [data, filters]
  );

  const getData = useCallback(async () => {
    const bikers = await getBiker();
    setBikers(bikers);

    const orders = await getOrder();
    const getItinerariesPromises = [];

    for (let i = 0; i < orders?.length; i += 1)
      getItinerariesPromises.push(getItineraryByOder(orders[i]?.id ?? ""));

    const itineraries = await Promise.all(getItinerariesPromises);

    const customOrder = orders
      .map((item, index) => ({
        ...item,
        clientName: item?.client?.name,
        clientContact: item?.client?.phone,
        deliveryDate: moment(item?.order?.deliveryDate).format("DD/MM/YYYY"),
        orderStatus: getStatus(item?.order?.approved),
        itineraryStatus: itineraries[index][0]?.status ?? "Aguardando",
        itineraryId: itineraries[index][0]?.id ?? "",
        bikerId: itineraries[index][0]?.biker?.id ?? "",
        bikerName: itineraries[index][0]?.biker?.name ?? "",
      }))
      .filter(
        (item) =>
          item?.delivery &&
          item?.pickup &&
          item?.delivery?.length === 1 &&
          item?.pickup?.length === 1
      );

    setData(customOrder);
    getDataFiltered(customOrder);
    setLoading(false);
  }, [getDataFiltered, getStatus]);

  useEffect(() => {
    if (!data) getData();
  }, [data, getData]);

  useEffect(() => {
    getDataFiltered();
  }, [filters, getDataFiltered]);

  const onChangeFilter = useCallback(
    ({ target: { value } }: { target: { value: unknown } }, prop: string) =>
      setFilters((prev) => ({ ...prev, [prop]: value as string })),
    []
  );

  const onChangeStatus = useCallback(
    async (value: string, row: OrderFormTDO) => {
      setLoading(true);
      if (value === "Aprovado")
        await approveOrder({ id: row?.id ?? "", approved: true });
      if (value === "Cancelado")
        await approveOrder({ id: row?.id ?? "", approved: false });
      getData();
    },
    [getData]
  );

  const onChangeBiker = useCallback(
    async (bikerId: string, row: OrderFormTDO) => {
      setLoading(true);
      await updateItinerary({ id: row?.itineraryId, biker: { id: bikerId } });
      getData();
    },
    [getData]
  );

  const onRouteDetails = useCallback((item: any) => {
    setOpenModal(true);
    setSelected(item);
  }, []);

  const onClose = useCallback(() => {
    setOpenModal(false);
    setSelected(undefined);
  }, []);

  const getIsDisabled = useCallback((value: OrderTDO) => {
    if (!value?.order?.approved) return true;
    return false;
  }, []);

  const columns = useMemo(
    () =>
      [
        {
          id: "clientName",
          label: "Cliente",
        },
        {
          id: "clientContact",
          label: "Contato",
        },
        {
          id: "totalPrice",
          label: "Total",
          format: (value) => `R$ ${value}`,
        },
        {
          id: "orderStatus",
          label: "Status solicitação",
          type: "select",
          values: getOptions(OrderStatus),
          onChange: onChangeStatus,
        },
        {
          id: "deliveryDate",
          label: "Data de entrega",
        },
        {
          id: "bikerId",
          label: "Biker",
          type: "select",
          values: bikers.map((item) => ({
            value: item?.id ?? "",
            label: item?.name ?? "",
          })),
          onChange: onChangeBiker,
          disabled: (value: OrderTDO) => getIsDisabled(value),
        },
        {
          id: "itineraryStatus",
          label: "Status entrega",
        },
        {
          id: "actions",
          type: "action",
        },
      ] as Column[],
    [bikers, getIsDisabled, getOptions, onChangeBiker, onChangeStatus]
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
    <Layout>
      <Loading loading={loading} />
      <S.Row className="space-between">
        <S.Title>Entregas avulsas</S.Title>
      </S.Row>
      <S.Row>
        <TextField
          id="search"
          label="Buscar por cliente"
          icon={<Search color="#00B596" />}
          inputColor="#00B596"
          value={filters?.client ?? ""}
          onChange={(e) => onChangeFilter(e, "client")}
        />
        <Select
          variant="outlined"
          label="Status"
          options={getOptions(OrderStatus, true, true)}
          value={filters?.status ?? ""}
          onChange={(e) => onChangeFilter(e, "status")}
        />
        <Select
          variant="outlined"
          label="Biker"
          options={getOptions(bikers, true)}
          value={filters?.biker ?? ""}
          onChange={(e) => onChangeFilter(e, "biker")}
        />
      </S.Row>

      <Table
        boldHead
        borderHead
        columns={columns}
        rows={dataFiltered}
        actions={actions}
      />

      <View open={openModal} onClose={onClose} data={selected} />
    </Layout>
  );
};

export default memo(SingleDeliveries);
