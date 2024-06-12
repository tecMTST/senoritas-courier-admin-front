import React, { memo } from "react";
import Card from "../../../components/Card";
import Modal from "../../../components/Modal";
import * as S from "./style";

interface Props {
  open: boolean;
  onClose: () => void;
  data: {
    client?: string;
    contact?: string;
    address?: string;
    zipCode?: string;
  };
}

interface ItemsProps {
  data?: {
    client?: string;
    contact?: string;
    address?: string;
    zipCode?: string;
  };
}

const Details = ({ data }: ItemsProps): JSX.Element => (
  <S.Container>
    <S.Row $gap={64} $alignItems="flex-start">
      <S.Column>
        <S.Text $bold $title>
          Nome do cliente
        </S.Text>
        <S.Text>{data?.client ?? " - "}</S.Text>
      </S.Column>
      <S.Column>
        <S.Text $bold $title>
          CEP
        </S.Text>
        <S.Text>{data?.zipCode ?? " - "}</S.Text>
      </S.Column>
    </S.Row>
  </S.Container>
);

const General = ({ data }: ItemsProps): JSX.Element => (
  <S.Container>
    <S.Row>
      <S.Column>
        <S.Title>Visão geral</S.Title>
      </S.Column>
    </S.Row>
    <S.Divider />
    <S.Row $gap={64} $alignItems="flex-start">
      <S.Column>
        <S.Text $title>Total de vendas</S.Text>
        <S.Value>R$8.456,20</S.Value>
      </S.Column>
      <S.Column>
        <S.Text $title>Total de pedidos</S.Text>
        <S.Value>108 pedidos</S.Value>
      </S.Column>
      <S.Column>
        <S.Text $title>Entregas realizadas</S.Text>
        <S.Value>48 entregas</S.Value>
      </S.Column>
    </S.Row>
  </S.Container>
);

const Infos = ({ data }: ItemsProps): JSX.Element => (
  <S.Container>
    <S.Column>
      <S.Title> </S.Title>
    </S.Column>
    <S.Divider />
    <S.Row>
      <Card title="Pedidos em andamento" description="Total" value="21" />
    </S.Row>
  </S.Container>
);

const Historic = ({ data }: ItemsProps) => (
  <S.Container>
    <S.Column>
      <S.Title>Histórico de pedidos</S.Title>
    </S.Column>
    <S.Divider />
    <S.Text>Não há histórico</S.Text>
    <br />
    <br />
    <br />
  </S.Container>
);

const ClientDetails = ({ open, onClose, data }: Props): JSX.Element => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Detalhes do cliente"
      width="60vw"
    >
      <Details data={data} />

      <General data={data} />

      <Infos data={data} />

      <Historic data={data} />
    </Modal>
  );
};

export default memo(ClientDetails);
