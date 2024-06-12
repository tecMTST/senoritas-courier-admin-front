import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Search from "../../assets/icons/Search";
import Button from "../../components/Button";
import Select from "../../components/Inputs/select";
import Table, { Column } from "../../components/Table";
import { OrderStatus } from "../../utils/constants";
import { MockClients } from "../../utils/mocks";
import ClientDetails from "./modal/ClientDetails";
import * as S from "../style";

const Clients = (): JSX.Element => {
  const [client, setClient] = useState("");
  const [data, setData] = useState<
    {
      client: string;
      contact: string;
      address: string;
      zipCode: string;
    }[]
  >();
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState<{
    client: string;
    contact: string;
    address: string;
    zipCode: string;
  }>();

  useEffect(() => {
    const response = MockClients;
    setData(response);
  }, []);

  const onChangeClient = useCallback(
    ({ target: { value } }: { target: { value: unknown } }) =>
      setClient(value as string),
    []
  );

  const onClientDetails = useCallback(
    (item: { [x: string]: string | number }) => {
      setOpenModal(true);
      setSelected(
        item as {
          client: string;
          contact: string;
          address: string;
          zipCode: string;
        }
      );
    },
    []
  );

  const onClose = useCallback(() => {
    setOpenModal(false);
    setSelected(undefined);
  }, []);

  const columns = useMemo(
    () =>
      [
        {
          id: "client",
          label: "Cliente",
        },
        {
          id: "contact",
          label: "Contato",
        },
        {
          id: "address",
          label: "Endereço",
          orderBy: true,
        },
        {
          id: "zipCode",
          label: "CEP",
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
        text: "Ver detalhes de cliente",
        onClick: onClientDetails,
      },
    ],
    [onClientDetails]
  );

  return (
    <>
      <S.Row className="space-between">
        <S.Title>Clientes</S.Title>
        <Button
          text="Buscar por nome do cliente ou empresa"
          icon={<Search color="#00B596" />}
          onClick={() => alert("buscar")}
        />
      </S.Row>
      <S.Row>
        <Select
          variant="outlined"
          label="Cliente"
          options={OrderStatus}
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

      <ClientDetails
        open={openModal}
        onClose={onClose}
        data={
          selected as {
            client: string;
            contact: string;
            address: string;
            zipCode: string;
          }
        }
      />
    </>
  );
};

export default memo(Clients);
