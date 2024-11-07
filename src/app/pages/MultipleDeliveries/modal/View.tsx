import React, { memo } from "react";
import { ItineraryFormTDO } from "../../../utils/types";
import Modal from "../../../components/Modal";
import * as S from "./style";

interface Props {
  data?: ItineraryFormTDO;
  open: boolean;
  onClose: () => void;
}

const View = ({ data, open, onClose }: Props): JSX.Element => (
  <Modal
    open={open}
    onClose={onClose}
    title="Rota"
    subtitle="Entregas multiplas / Pedido"
    width="60vw"
    padding="0 40px"
  >
    <S.Container>
      <S.Row>
        <S.Title>Detalhes do pedido</S.Title>
      </S.Row>
      <S.Row $gap={64}>
        <S.Column>
          <S.Text $bold $title>
            Tipo do pedido
          </S.Text>
          <S.Text>Avulsa</S.Text>
        </S.Column>
        <S.Column>
          <S.Text $bold $title>
            Cliente
          </S.Text>
          <S.Text>{data?.clientName || " - "}</S.Text>
        </S.Column>
        <S.Column>
          <S.Text $bold $title>
            Total
          </S.Text>
          <S.Text>R$ {data?.totalPrice || " - "}</S.Text>
        </S.Column>
        <S.Column>
          <S.Text $bold $title>
            Status do pedido
          </S.Text>
          <S.Text>{data?.orderStatus || " - "}</S.Text>
        </S.Column>
        <S.Column>
          <S.Text $bold $title>
            Data de entrega
          </S.Text>
          <S.Text>{data?.deliveryDate || " - "}</S.Text>
        </S.Column>
      </S.Row>
    </S.Container>
    <S.Divider />
    <S.Container>
      <S.Row>
        <S.Title>Detalhes da rota</S.Title>
      </S.Row>
      <S.Row>
        <S.Column $gap={16} $width="75%">
          <S.Column>
            <S.Text $title>Destinatário</S.Text>
            <S.Text>{data?.clientName || " - "}</S.Text>
          </S.Column>
          <S.Column>
            <S.Text $title>Endereço da coleta</S.Text>
            <S.Text>{data?.pickup?.address?.address || " - "}</S.Text>
          </S.Column>
          <S.Column>
            <S.Text $title>Endereço da entrega</S.Text>
            <S.Text>{data?.delivery?.address?.address || " - "}</S.Text>
          </S.Column>
          <S.Column>
            <S.Text $title>Quantidade de Kms</S.Text>
            <S.Text>{data?.order?.distance || " - "}</S.Text>
          </S.Column>
        </S.Column>
      </S.Row>
      <S.Divider />
      <S.Row $width="50%" $margin="0 0 40px 0">
        <S.Column>
          <S.Text $title>Biker responsável</S.Text>
          <S.Text>{data?.bikerName || " - "}</S.Text>
        </S.Column>
        <S.Column>
          <S.Text $title>Status da entrega</S.Text>
          <S.Text>{data?.status || " - "}</S.Text>
        </S.Column>
      </S.Row>
    </S.Container>
  </Modal>
);

export default memo(View);
