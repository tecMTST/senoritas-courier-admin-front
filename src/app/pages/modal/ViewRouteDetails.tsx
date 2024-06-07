import React, { memo, useMemo } from "react";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import Edit from "../../assets/icons/Edit";
import * as S from "./style";

interface Data {
  order: string;
  client: string;
  total: string;
  status: string;
  orderDate: string;
  deliveryDate: string;
  biker: string;
}

interface Props {
  data?: Data;
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  onEdit: (selected: "view" | "editDetails" | "editPayment") => void;
}

const ViewRouteDetails = ({
  data,
  open,
  onClose,
  onSave,
  onEdit,
}: Props): JSX.Element => {
  const buttons = useMemo(
    () => [
      {
        text: "Salvar e sair",
        onClick: onSave,
        primary: true,
      },
      {
        text: "Cancelar",
        onClick: onClose,
        inline: true,
      },
    ],
    [onSave, onClose]
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      buttons={buttons}
      title="Rota"
      subtitle={`Entregas avulsas / Pedido ${data?.order ?? ""}`}
    >
      <>
        <S.Header>
          <S.Row>
            <S.Column>
              <S.Title>Detalhes do pedido</S.Title>
              <S.Subtitle>Pedido feito em {data?.orderDate}</S.Subtitle>
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
              <S.Text>{data?.client}</S.Text>
            </S.Column>
            <S.Column>
              <S.Text $bold $title>
                Total
              </S.Text>
              <S.Text>{data?.total}</S.Text>
            </S.Column>
            <S.Column>
              <S.Text $bold $title>
                Status do pedido
              </S.Text>
              <S.Text>{data?.status}</S.Text>
            </S.Column>
            <S.Column>
              <S.Text $bold $title>
                Data de entrega
              </S.Text>
              <S.Text>{data?.deliveryDate}</S.Text>
            </S.Column>
          </S.Row>
        </S.Header>
        <S.Divider />
        <S.Header>
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
          <S.Column $gap={16}>
            <S.Column>
              <S.Text $title>Destinatário</S.Text>
              <S.Text>Bruna Queiroz</S.Text>
            </S.Column>
            <S.Column>
              <S.Text $title>Endereço da coleta</S.Text>
              <S.Text>
                R. Serra de Japi, 408 - Vila Gomes Cardim, São Paulo - SP,
                03309-000
              </S.Text>
            </S.Column>
            <S.Column>
              <S.Text $title>Endereço da entrega</S.Text>
              <S.Text>
                R. Goanana, 40, apto 23 - Vila Esperança, São Paulo - SP,
                03646-020
              </S.Text>
            </S.Column>
            <S.Column>
              <S.Text $title>Quantidade de Kms</S.Text>
              <S.Text>20.8 Km</S.Text>
            </S.Column>
            <S.Column>
              <S.Text $title>Biker responsável</S.Text>
              <S.Text>Jacira Sousa</S.Text>
            </S.Column>
            <S.Column>
              <S.Text $title>Status da entrega</S.Text>
              <S.Text>Em andamento</S.Text>
            </S.Column>
          </S.Column>
        </S.Header>
        <S.Divider />
        <S.Header>
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
          <S.Row $gap={64}>
            <S.Column>
              <S.Text $bold $title>
                Status do pagamento
              </S.Text>
              <S.Text>Aprovado</S.Text>
            </S.Column>
            <S.Column>
              <S.Text $bold $title>
                Forma de pagamento
              </S.Text>
              <S.Text>Pix</S.Text>
            </S.Column>
          </S.Row>
          <S.Subdivider />
          <S.Column>
            <S.Row $width="50%">
              <S.Text>Subtotal do(s) item(ns)</S.Text>
              <S.Text>R$ 50,43</S.Text>
            </S.Row>
            <S.Row $width="50%">
              <S.Text>Adicionais</S.Text>
              <S.Text>R$ 15,00</S.Text>
            </S.Row>
          </S.Column>
          <S.Subdivider />
          <S.Row $width="50%">
            <S.Text $bold $title>
              Total
            </S.Text>
            <S.Text $bold $title>
              R$ 65,43
            </S.Text>
          </S.Row>
        </S.Header>
      </>
    </Modal>
  );
};

export default memo(ViewRouteDetails);
