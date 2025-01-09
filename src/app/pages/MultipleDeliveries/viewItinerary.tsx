import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../components/Button";
import Select from "../../components/Inputs/select";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Table, { Column } from "../../components/Table";
import {
  getBiker,
  getItineraryByOder,
  updateItinerary,
} from "../../services/api";
import {
  Biker,
  ItineraryFormTDO,
  ItineraryTDO,
  OrderFormTDO,
} from "../../utils/types";
import View from "./modal/View";
import Dot from "../../assets/icons/Dot";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import * as S from "../style";

interface Props {
  order: OrderFormTDO;
  onOrder: () => void;
}

const ViewItinerary = ({ order, onOrder }: Props): JSX.Element => {
  const [biker, setBiker] = useState<string>();

  const [bikers, setBikers] = useState<Biker[]>([]);

  const [data, setData] = useState<ItineraryFormTDO[]>();
  const [dataFiltered, setDataFiltered] = useState<ItineraryFormTDO[]>();

  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState<ItineraryFormTDO>();

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

  const filterByBiker = useCallback(
    (value?: ItineraryFormTDO[]) => {
      const filtered = (value ?? data)?.filter(
        (item) => !biker || biker === "Todos" || item?.bikerId === biker
      );
      setDataFiltered(filtered);
    },
    [biker, data]
  );

  const getData = useCallback(async () => {
    const bikers = await getBiker();
    setBikers(bikers);

    const itineraries = await getItineraryByOder(order?.id ?? "");

    const customItirnerary = itineraries.map(
      (item) =>
        ({
          ...order,
          ...item,
          pickupName: item?.pickup?.contact?.name,
          deliveryName: item?.delivery?.contact?.name,
          status: item?.status ?? "Aguardando",
          itineraryId: item?.id ?? "",
          oderId: order?.id ?? "",
          bikerId: item?.biker?.id,
          bikerName: item?.biker?.name,
        } as ItineraryFormTDO)
    );

    setData(customItirnerary);
    setLoading(false);
  }, [order]);

  useEffect(() => {
    if (!data) getData();
  }, [data, getData]);

  useEffect(() => {
    if (data?.length && !!biker) filterByBiker();
  }, [biker, data?.length, filterByBiker]);

  useEffect(() => {
    if (data && !biker) setDataFiltered(data);
  }, [biker, data]);

  const onRouteDetails = useCallback((item: any) => {
    setOpenModal(true);
    setSelected(item);
  }, []);

  const onClose = useCallback(() => {
    setOpenModal(false);
    setSelected(undefined);
  }, []);

  const onChangeBiker = useCallback(
    async (bikerId: string, row: OrderFormTDO) => {
      setLoading(true);
      await updateItinerary({ id: row?.itineraryId, biker: { id: bikerId } });
      getData();
    },
    [getData]
  );

  const getIsDisabled = useCallback((value: ItineraryTDO) => {
    if (!value?.order?.approved) return true;
    return false;
  }, []);

  const columns = useMemo(
    () =>
      [
        {
          id: "pickupName",
          label: "Remetente",
        },
        {
          id: "deliveryName",
          label: "Destinatário",
        },
        {
          id: "deliveryDate",
          label: "Data de entrega",
          orderBy: true,
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
          disabled: (value: ItineraryTDO) => getIsDisabled(value),
        },
        {
          id: "status",
          label: "Status entrega",
        },
        {
          id: "actions",
          type: "action",
        },
      ] as Column[],
    [bikers, getIsDisabled, onChangeBiker]
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
      <Button
        inline
        startIcon
        text="Voltar"
        icon={<ArrowLeft />}
        onClick={onOrder}
      />
      <S.Row className="space-between">
        <S.Path>
          <label className="first">Entregas múltiplas / </label>
          <label className="last">Rotas</label>
        </S.Path>
      </S.Row>
      <S.Row>
        <Select
          variant="outlined"
          label="Biker"
          options={getOptions(bikers, true)}
          value={biker ?? ""}
          onChange={(e) => setBiker(e.target.value as string)}
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

export default memo(ViewItinerary);
