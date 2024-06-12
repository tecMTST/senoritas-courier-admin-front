import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Biker } from "../../../utils/types";
import Modal from "../../../components/Modal";
import TextField from "../../../components/Inputs/textField";
import TextArea from "../../../components/Inputs/textArea";
import * as S from "../../style";
import Attachment from "../../../components/Attachment";

interface Props {
  open: boolean;
  onClose: () => void;
  data?: Biker;
  onSave: () => void;
}

const NewEdit = ({ open, onClose, data, onSave }: Props): JSX.Element => {
  const [_data, _setData] = useState(data);

  useEffect(() => {
    if (data?.name !== _data?.name) _setData(data);
  }, [_data, data]);

  const onChangePhoto = useCallback(
    (e: any) => {
      const file = e.target.files[0];
      _setData({
        ..._data,
        photo:
          file?.name ??
          "https://public-static-cms-270de735.s3.us-east-1.amazonaws.com/large_Senoritas_Courrier_01052024_046_8b6c7769b9.jpg",
      });
    },
    [_data]
  );

  const buttons = useMemo(
    () => [
      {
        text: data ? "Confirmar edição" : "Salvar e sair",
        onClick: onSave,
        primary: true,
      },
      {
        text: "Cancelar",
        onClick: onClose,
        inline: true,
      },
    ],
    [data, onClose, onSave]
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      buttons={buttons}
      title={data ? "Alterar detalhes biker" : "Cadastro de biker"}
      width="60vw"
    >
      <S.Text>Informações gerais</S.Text>
      <S.Row className="center">
        <Attachment value={_data?.photo} onChange={onChangePhoto} />
        <TextField
          width="100%"
          id="name"
          text="Nome completo"
          value={_data?.name}
          onChange={(e) => _setData({ ...data, name: e.target.value })}
        />
      </S.Row>
      <S.Row className="margin-bottom-40">
        <TextArea
          width="100%"
          id="description"
          text="Descrição"
          value={_data?.description}
          onChange={(e) => _setData({ ...data, description: e.target.value })}
        />
      </S.Row>
      <S.Text>Dados de endereço</S.Text>
      <S.Row>
        <TextField
          width="20%"
          id="zipCode"
          text="CEP"
          value={_data?.zipCode}
          onChange={(e) => _setData({ ...data, zipCode: e.target.value })}
          required
        />
        <TextField
          width="80%"
          id="address"
          text="Endereço"
          value={_data?.address}
          onChange={(e) => _setData({ ...data, address: e.target.value })}
          required
        />
      </S.Row>
      <S.Row>
        <TextField
          width="20%"
          id="addressNumber"
          text="Número"
          value={_data?.addressNumber}
          onChange={(e) =>
            _setData({ ...data, addressNumber: Number(e.target.value) })
          }
          required
        />
        <TextField
          width="40%"
          id="complement"
          text="Complemento"
          value={_data?.complement}
          onChange={(e) => _setData({ ...data, complement: e.target.value })}
        />
        <TextField
          width="40%"
          id="neighborhood"
          text="Bairro"
          value={_data?.neighborhood}
          onChange={(e) => _setData({ ...data, neighborhood: e.target.value })}
          required
        />
      </S.Row>
      <S.Row className="margin-bottom-40">
        <TextField
          width="20%"
          id="state"
          text="Estado"
          value={_data?.state}
          onChange={(e) => _setData({ ...data, state: e.target.value })}
          required
        />
        <TextField
          width="40%"
          id="city"
          text="Cidade"
          value={_data?.city}
          onChange={(e) => _setData({ ...data, city: e.target.value })}
          required
        />
        <TextField
          width="40%"
          id="comments"
          text="Referência"
          value={_data?.comments}
          onChange={(e) => _setData({ ...data, comments: e.target.value })}
        />
      </S.Row>
      <S.Text>Outros dados</S.Text>
      <S.Row>
        <TextField
          width="50%"
          id="availability"
          text="Disponibilidade"
          value={_data?.availability}
          onChange={(e) => _setData({ ...data, availability: e.target.value })}
          required
        />
        <TextField
          width="50%"
          id="localization"
          text="Localização base"
          value={_data?.localization}
          onChange={(e) => _setData({ ...data, localization: e.target.value })}
          required
        />
      </S.Row>
      <S.Row className="margin-bottom-40">
        <TextField
          width="50%"
          id="phone"
          text="Contato de emergência"
          value={_data?.phone}
          onChange={(e) => _setData({ ...data, phone: e.target.value })}
          required
        />
      </S.Row>
    </Modal>
  );
};

export default memo(NewEdit);
