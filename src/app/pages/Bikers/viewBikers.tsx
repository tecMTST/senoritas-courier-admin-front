import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/Inputs/textField";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Table, { Column } from "../../components/Table";
import {
  createBiker,
  deleteBiker,
  getBiker,
  updateBiker,
} from "../../services/api";
import { Biker } from "../../utils/types";
import Delete from "../../assets/icons/Delete";
import EditInline from "../../assets/icons/EditInline";
import Plus from "../../assets/icons/Plus";
import Search from "../../assets/icons/Search";
import BikerImg from "../../assets/images/biker.svg";
import NewEdit from "./modal/NewEdit";
import * as S from "../style";

interface Props {
  onItinerary: (row: Biker) => void;
}

const ViewBikers = ({ onItinerary }: Props): JSX.Element => {
  const [biker, setBiker] = useState<string>();
  const [data, setData] = useState<Biker[]>();
  const [dataFiltered, setDataFiltered] = useState<Biker[]>();
  const [selected, setSelected] = useState<Biker>();
  const [openModal, setOpenModal] = useState(false);
  const [loading,  setLoading] = useState(true);

  const filterByName = useCallback(() => {
    const filtered = data?.filter(
      (item) =>
        biker && item?.name?.toLowerCase()?.includes(biker.toLowerCase())
    );
    setDataFiltered(filtered);
  }, [biker, data]);

  const getData = useCallback(async () => {
    const response = await getBiker();
    const bikers = response.map((item) => ({
      ...item,
      zipCode: item?.address?.zipCode,
      phone: item?.contact?.phone,
    }));
    setData(bikers);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!data) getData();
  }, [data, getData]);

  useEffect(() => {
    if (data?.length && !!biker) filterByName();
  }, [biker, data?.length, filterByName]);

  useEffect(() => {
    if (data && !biker) setDataFiltered(data);
  }, [biker, data]);

  const onEdit = useCallback((item: { [x: string]: string | number }) => {
    setOpenModal(true);
    setSelected(item);
  }, []);

  const onClose = useCallback(() => {
    setOpenModal(false);
    setSelected(undefined);
  }, []);

  const onSave = useCallback(
    async (payload: Biker) => {
      setLoading(true);
      delete payload?.phone;
      delete payload?.zipCode;

      if (payload?.id) {
        delete payload?.password;
        await updateBiker(payload);
      } else await createBiker(payload);

      getData();
      onClose();
      setLoading(false);
    },
    [getData, onClose]
  );

  const onRemove = useCallback(
    async (item: Biker) => {
      setLoading(true);
      if (item?.id) await deleteBiker(item?.id);
      await getData();
    },
    [getData]
  );

  const columns = useMemo(
    () =>
      [
        {
          id: "name",
          label: "Biker",
        },
        {
          id: "email",
          label: "E-mail",
        },
        {
          id: "phone",
          label: "Telefone",
        },
        {
          id: "zipCode",
          label: "CEP",
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
        text: "Ver pedidos da biker",
        onClick: onItinerary,
      },
      {
        type: "secondary",
        text: "Editar",
        icon: <EditInline />,
        onClick: onEdit,
      },
      {
        type: "secondary",
        text: "Remover",
        icon: <Delete />,
        onClick: onRemove,
      },
    ],
    [onEdit, onItinerary, onRemove]
  );

  return (
    <Layout>
      <Loading loading={loading} />
      {data?.length === 0 ? (
        <S.Container>
          <img src={BikerImg} alt="biker" />
          <S.Empty>Nenhuma biker cadastrada</S.Empty>
          <S.Info>
            Para cadastrar uma biker, tocar abaixo em Cadastrar Biker
          </S.Info>
          <Button
            primary
            text="Cadastrar biker"
            icon={<Plus />}
            onClick={() => setOpenModal(true)}
            className="margin-top-48"
          />
        </S.Container>
      ) : (
        <>
          <S.Row className="space-between baseline">
            <S.Title>Bikers</S.Title>
            <S.Row className="end">
              <Button
                primary
                text="Cadastrar biker"
                icon={<Plus />}
                onClick={() => setOpenModal(true)}
              />
            </S.Row>
          </S.Row>

          <S.Row>
            <TextField
              id="search"
              label="Buscar por biker"
              icon={<Search color="#00B596" />}
              inputColor="#00B596"
              value={biker ?? ""}
              onChange={(e) => setBiker(e.target.value)}
            />
          </S.Row>

          <Table
            boldHead
            borderHead
            columns={columns}
            rows={dataFiltered}
            actions={actions}
          />
        </>
      )}

      <NewEdit
        data={selected}
        onSave={onSave}
        onClose={onClose}
        open={openModal}
      />
    </Layout>
  );
};

export default memo(ViewBikers);
