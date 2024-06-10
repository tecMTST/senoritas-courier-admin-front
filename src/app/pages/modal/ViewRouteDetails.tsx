import React, { memo } from "react";
import Button from "../../components/Button";
import Edit from "../../assets/icons/Edit";
import { FormTDO } from "../../utils/types";
import * as S from "./style";

interface Props {
  data?: FormTDO;
  onEdit: (selected: "view" | "editDetails" | "editPayment") => void;
}

const OrderDetails = ({ data }: { data?: FormTDO }): JSX.Element => (
  <S.Container>
    <S.Row>
      <S.Column>
        <S.Title>Detalhes do pedido</S.Title>
        <S.Subtitle>Pedido feito em {data?.createdAt ?? " - "}</S.Subtitle>
      </S.Column>
      <Button
        inline
        text="Editar detalhes do pedido"
        onClick={() => alert("Editar detalhes do pedido")}
        icon={<Edit />}
      />
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
        <S.Text>{data?.clientName ?? " - "}</S.Text>
      </S.Column>
      <S.Column>
        <S.Text $bold $title>
          Total
        </S.Text>
        <S.Text>{data?.total ?? " - "}</S.Text>
      </S.Column>
      <S.Column>
        <S.Text $bold $title>
          Status do pedido
        </S.Text>
        <S.Text>{data?.status ?? " - "}</S.Text>
      </S.Column>
      <S.Column>
        <S.Text $bold $title>
          Data de entrega
        </S.Text>
        <S.Text>{data?.deliveryDate ?? " - "}</S.Text>
      </S.Column>
    </S.Row>
  </S.Container>
);

const RouteDetails = ({ data, onEdit }: Props): JSX.Element => (
  <S.Container>
    <S.Row>
      <S.Column>
        <S.Title>Detalhes da rota</S.Title>
      </S.Column>
      <Button
        inline
        text="Editar detalhes da rota"
        onClick={() => onEdit("editDetails")}
        icon={<Edit />}
      />
    </S.Row>
    <S.Row>
      <S.Column $gap={16} $width="75%">
        <S.Column>
          <S.Text $title>Destinatário</S.Text>
          <S.Text>{data?.clientName ?? " - "}</S.Text>
        </S.Column>
        <S.Column>
          <S.Text $title>Endereço da coleta</S.Text>
          <S.Text>{data?.pickup?.address ?? " - "}</S.Text>
        </S.Column>
        <S.Column>
          <S.Text $title>Endereço da entrega</S.Text>
          <S.Text>{data?.delivery?.address ?? " - "}</S.Text>
        </S.Column>
        <S.Column>
          <S.Text $title>Quantidade de Kms</S.Text>
          <S.Text>{data?.order?.distance ?? " - "}</S.Text>
        </S.Column>
      </S.Column>
    </S.Row>
    <S.Divider $margin="0" />
    <S.Row $width="50%">
      <S.Column>
        <S.Text $title>Biker responsável</S.Text>
        <S.Text>{data?.biker ?? " - "}</S.Text>
      </S.Column>
      <S.Column>
        <S.Text $title>Status da entrega</S.Text>
        <S.Text>{data?.status ?? " - "}</S.Text>
      </S.Column>
    </S.Row>
  </S.Container>
);

const PaymentDetails = ({ data, onEdit }: Props) => (
  <S.Container>
    <S.Row>
      <S.Column>
        <S.Title>Detalhes do pagamento</S.Title>
      </S.Column>
      <Button
        inline
        text="Editar detalhes do pagamento"
        onClick={() => onEdit("editPayment")}
        icon={<Edit />}
      />
    </S.Row>
    <S.Row $justifyContent="normal" $alignItems="start" $gap={64}>
      <S.Column $width="50%" $gap={16}>
        <S.Column>
          <S.Text $bold $title>
            Status do pagamento
          </S.Text>
          <S.Text>{data?.payment?.status ?? " - "}</S.Text>
        </S.Column>
        <S.Divider $margin="0" />
        <S.Column>
          <S.Row>
            <S.Text>Subtotal do(s) item(ns)</S.Text>
            <S.Text>R$ {data?.estimatedAmounts?.mainPrice ?? " - "}</S.Text>
          </S.Row>
          <S.Row>
            <S.Text>Adicionais</S.Text>
            <S.Text>
              R$ {(data?.total ?? 0) - (data?.estimatedAmounts?.mainPrice ?? 0)}
            </S.Text>
          </S.Row>
        </S.Column>
        <S.Divider $margin="0" />
        <S.Row>
          <S.Text $bold $title>
            Total
          </S.Text>
          <S.Text $bold $title>
            R$ {data?.total}
          </S.Text>
        </S.Row>
      </S.Column>
      <S.Column>
        <S.Text $bold $title>
          Forma de pagamento
        </S.Text>
        <S.Text>
          {data?.payment?.payments?.map((item) => item?.type)?.join(", ")}
        </S.Text>
      </S.Column>
    </S.Row>
  </S.Container>
);

const ViewRouteDetails = ({ data, onEdit }: Props): JSX.Element => {
  return (
    <>
      <OrderDetails data={data} />
      <S.Divider />
      <RouteDetails data={data} onEdit={onEdit} />
      <S.Divider />
      <PaymentDetails data={data} onEdit={onEdit} />
    </>
  );
};

export default memo(ViewRouteDetails);
