import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { MockBikers } from "../../utils/mocks";
import { Biker } from "../../utils/types";
import Button from "../../components/Button";
import Table, { Column } from "../../components/Table";
import EditInline from "../../assets/icons/EditInline";
import Search from "../../assets/icons/Search";
import Plus from "../../assets/icons/Plus";
import BikerImg from "../../assets/images/biker.svg";
import ModalNewEdit from "./modalNewEdit";
import * as S from "../style";

const Bikers = (): JSX.Element => {
  const [data, setData] = useState<Biker[]>();
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState<Biker>();

  useEffect(() => {
    setData(MockBikers);
  }, []);

  const onEdit = useCallback((item: { [x: string]: string | number }) => {
    setOpenModal(true);
    setSelected(item);
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
          id: "name",
          label: "Biker",
        },
        {
          id: "zipCode",
          label: "CEP",
          orderBy: true,
        },
        {
          id: "status",
          label: "Status",
          orderBy: true,
        },
        {
          id: "availability",
          label: "Disponibilidade",
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
        text: "Ver pedidos da biker",
        onClick: () => alert("ver pedidos"),
      },
      {
        type: "secondary",
        text: "Editar",
        icon: <EditInline />,
        onClick: onEdit,
      },
    ],
    [onEdit]
  );

  return (
    <>
      {!data ? (
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
          <S.Row className="space-between">
            <S.Title>Bikers</S.Title>
            <Button
              text="Buscar por biker"
              icon={<Search color="#00B596" />}
              onClick={() => alert("buscar")}
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
      )}

      <ModalNewEdit
        data={selected}
        onSave={onSave}
        onClose={onClose}
        open={openModal}
      />
    </>
  );
};

export default memo(Bikers);
