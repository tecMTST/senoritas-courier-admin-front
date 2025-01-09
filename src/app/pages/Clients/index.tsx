import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import TextField from "../../components/Inputs/textField";
import Table, { Column } from "../../components/Table";
import { deleteClient, getClient } from "../../services/api";
import { ClientResponse } from "../../utils/types";
import Delete from "../../assets/icons/Delete";
import Search from "../../assets/icons/Search";
import * as S from "../style";

const Clients = (): JSX.Element => {
  const [name, setName] = useState("");
  const [data, setData] = useState<ClientResponse[]>();
  const [dataFiltered, setDataFiltered] = useState<ClientResponse[]>();

  const filterByName = useCallback(() => {
    const filtered = data?.filter(
      (item) => name && item?.name?.toLowerCase()?.includes(name.toLowerCase())
    );
    setDataFiltered(filtered);
  }, [name, data]);

  const getData = useCallback(async () => {
    const response = await getClient();
    const clients = response.map((item) => ({
      ...item,
      phone: item?.contact?.phone,
    }));
    setData(clients);
  }, []);

  useEffect(() => {
    if (!data) getData();
  }, [data, getData]);

  useEffect(() => {
    if (data?.length && !!name) filterByName();
  }, [name, data?.length, filterByName]);

  useEffect(() => {
    if (data && !name) setDataFiltered(data);
  }, [name, data]);

  const onChangeClient = useCallback(
    ({ target: { value } }: { target: { value: unknown } }) =>
      setName(value as string),
    []
  );

  const onClientDelete = useCallback(
    async (item: ClientResponse) => {
      if (item?.id) await deleteClient(item?.id);
      await getData();
    },
    [getData]
  );

  const columns = useMemo(
    () =>
      [
        {
          id: "name",
          label: "Cliente",
        },
        {
          id: "email",
          label: "E-mail",
        },
        {
          id: "phone",
          label: "Contato",
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
        type: "secondary",
        text: "Remover",
        icon: <Delete />,
        onClick: onClientDelete,
      },
    ],
    [onClientDelete]
  );

  return (
    <Layout>
      <Loading loading={!data} />
      <S.Row className="space-between">
        <S.Title>Clientes</S.Title>
      </S.Row>

      <S.Row>
        <TextField
          id="search"
          label="Buscar por nome do cliente"
          icon={<Search color="#00B596" />}
          inputColor="#00B596"
          value={name ?? ""}
          onChange={onChangeClient}
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

export default memo(Clients);
