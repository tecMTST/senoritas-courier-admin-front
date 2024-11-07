import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Table, { Column } from "../../components/Table";
import { getItineraryByBiker } from "../../services/api";
import { ItineraryFormTDO } from "../../utils/types";
import Button from "../../components/Button";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import * as S from "../style";

interface Props {
  bikerId: string;
  onBiker: () => void;
}

const ViewItinerary = ({ bikerId, onBiker }: Props): JSX.Element => {
  const [data, setData] = useState<ItineraryFormTDO[]>();

  const getStatus = useCallback((approved?: boolean | null) => {
    if (approved === undefined || approved === null) return "Em aprovação";

    if (!approved) return "Cancelado";

    return "Aprovado";
  }, []);

  const getData = useCallback(async () => {
    const itineraries = await getItineraryByBiker(bikerId);

    const customItineraries = itineraries.map((item) => ({
      ...item,
      clientName: item?.pickup?.contact?.name,
      clientContact: item?.client?.contact?.phone,
      deliveryName: item?.delivery?.contact?.name,
      orderStatus: getStatus(item?.order?.approved),
      status: item?.status || "Aguardando",
    }));

    setData(customItineraries);
  }, [bikerId, getStatus]);

  useEffect(() => {
    if (!data) getData();
  }, [data, getData]);

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
          id: "deliveryName",
          label: "Destinatário",
        },
        {
          id: "orderStatus",
          label: "Status solicitação",
        },
        {
          id: "status",
          label: "Status entrega",
        },
      ] as Column[],
    []
  );

  return (
    <Layout>
      <Button
        inline
        startIcon
        text="Voltar"
        icon={<ArrowLeft />}
        onClick={onBiker}
      />
      <S.Row className="space-between">
        <S.Path>
          <label className="first">Bikers / </label>
          <label className="last">Pedidos</label>
        </S.Path>
      </S.Row>
      <Table boldHead borderHead columns={columns} rows={data} />
    </Layout>
  );
};

export default memo(ViewItinerary);
