import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import moment from "moment";
import Search from "../../assets/icons/Search";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Select from "../../components/Inputs/select";
import Table, { Column } from "../../components/Table";
import { OrderStatus } from "../../utils/constants";
import { approveOrder, getOrder } from "../../services/api";
import { OrderFormTDO } from "../../utils/types";
import Dot from "../../assets/icons/Dot";
import TextField from "../../components/Inputs/textField";
import * as S from "../style";

interface Props {
  onItinerary: (row: OrderFormTDO) => void;
}

const ViewOrder = ({ onItinerary }: Props): JSX.Element => {
  const [filters, setFilters] = useState<{
    status?: string;
    client?: string;
  }>();

  const [data, setData] = useState<OrderFormTDO[]>();
  const [dataFiltered, setDataFiltered] = useState<OrderFormTDO[]>();

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
      const { client, status } = filters ?? {};

      const filtered = (value ?? data)?.filter(
        (item) =>
          (!client ||
            item?.clientName?.toLowerCase()?.includes(client.toLowerCase())) &&
          (!status || status === "Todos" || item?.orderStatus === status)
      );
      setDataFiltered(filtered);
    },
    [data, filters]
  );

  const getData = useCallback(async () => {
    const orders = await getOrder();
    const customOrder = orders
      .map((item) => ({
        ...item,
        clientName: item?.client?.name,
        clientContact: item?.client?.phone,
        deliveryDate: moment(item?.order?.deliveryDate).format("DD/MM/YYYY"),
        orderStatus: getStatus(item?.order?.approved),
      }))
      .filter(
        (item) =>
          item?.delivery &&
          item?.pickup &&
          (item?.delivery?.length > 1 || item?.pickup?.length > 1)
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
          id: "actions",
          type: "action",
        },
      ] as Column[],
    [getOptions, onChangeStatus]
  );

  const actions = useMemo(
    () => [
      {
        type: "primary",
        text: "Ver detalhes do pedido",
        onClick: onItinerary,
      },
    ],
    [onItinerary]
  );

  return (
    <Layout>
      <Loading loading={loading} />
      <S.Row className="space-between">
        <S.Title>Entregas múltiplas</S.Title>
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
      </S.Row>

      <Table
        boldHead
        borderHead
        columns={columns}
        rows={dataFiltered}
        actions={actions}
      />
    </Layout>
  );
};

export default memo(ViewOrder);
