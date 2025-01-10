import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import citiesJSON from "../../../assets/data/cities.json";
import statesJSON from "../../../assets/data/states.json";
import { Biker } from "../../../utils/types";
import Modal from "../../../components/Modal";
import TextField from "../../../components/Inputs/textField";
// import Attachment from "../../../components/Attachment";
import { brasilApi, openrouteserviceApi } from "../../../services/api";
import { maskPhone, maskZipCode } from "../../../utils/functions";
import Select from "../../../components/Inputs/select";
import * as S from "../../style";

interface Props {
  open: boolean;
  onClose: () => void;
  data?: Biker;
  onSave: (data: Biker) => void;
}

const NewEdit = ({ open, onClose, data, onSave }: Props): JSX.Element => {
  const [_data, _setData] = useState(data);

  useEffect(() => {
    if (!open) _setData(undefined);
  }, [open]);

  useEffect(() => {
    if (data?.id && !_data?.id) _setData(data);
  }, [_data?.id, data, open]);

  // const onChangePhoto = useCallback(
  //   (e: any) => {
  //     const file = e.target.files[0];
  //     _setData({
  //       ..._data,
  //       photo:
  //         file?.name ??
  //         "https://public-static-cms-270de735.s3.us-east-1.amazonaws.com/large_Senoritas_Courrier_01052024_046_8b6c7769b9.jpg",
  //     });
  //   },
  //   [_data]
  // );

  const states = useMemo(
    () =>
      statesJSON.map((item) => ({
        label: item.name.pt,
        value: item._id.replace("BR-", ""),
      })),
    []
  );

  const cities = useMemo(
    () =>
      citiesJSON
        .filter((item) => item?.state === `BR-${_data?.address?.state}`)
        ?.map((innerItem) => ({
          label: innerItem.name.pt,
          value: innerItem.name.pt,
        })),
    [_data?.address?.state]
  );

  const getAddress = useCallback((value: string) => {
    brasilApi
      .get(`/${value}`)
      .then((response) => {
        if (response?.data)
          _setData((prev) => ({
            ...prev,
            address: {
              ...prev?.address,
              address: response.data.street,
              neighborhood: response.data.neighborhood,
              state: response.data.state,
              city: response.data.city,
            },
          }));
      })
      .catch((e) => console.warn(e));
  }, []);

  const getGeocode = useCallback(() => {
    if (
      !!_data?.address &&
      !!_data?.address?.address &&
      !!_data?.address?.city &&
      !!_data?.address?.state
    ) {
      openrouteserviceApi
        .get(
          `${_data?.address?.address}, ${_data?.address?.number}, ${_data?.address?.neighborhood}, ${_data?.address?.city}, ${_data?.address?.state}`
        )
        .then((response) => {
          const coordenates =
            response?.data?.features?.[0]?.geometry?.coordinates?.slice(0);

          _setData((prev) => ({
            ...prev,
            address: {
              ...prev?.address,
              coordinates: {
                longitude: coordenates[0],
                latitude: coordenates[1],
              },
            },
          }));
        })
        .catch((e) => console.warn(e));
    }
  }, [_data?.address]);

  const buttons = useMemo(
    () => [
      {
        text: data ? "Confirmar edição" : "Salvar e sair",
        onClick: () => onSave(_data as Biker),
        primary: true,
        disabled:
          !_data?.name ||
          !_data?.email ||
          !_data?.contact?.phone ||
          !_data?.address?.address ||
          !_data?.address?.number ||
          !_data?.address?.neighborhood ||
          !_data?.address?.city ||
          !_data?.address?.state ||
          !_data?.address?.zipCode ||
          !_data?.maxWeight ||
          !_data?.maxWeight ||
          !_data?.maxVolume ||
          !_data?.maxDistance ||
          !_data?.maxChargeableDistance ||
          !_data?.password,
      },
      {
        text: "Cancelar",
        onClick: onClose,
        inline: true,
      },
    ],
    [data, onClose, onSave, _data]
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
        {/* TODO */}
        {/* <Attachment value={_data?.photo} onChange={onChangePhoto} /> */}
        <TextField
          width="100%"
          id="name"
          text="Nome completo*"
          value={_data?.name ?? ""}
          onChange={(e) => _setData({ ..._data, name: e.target.value })}
          required
        />
      </S.Row>
      <S.Row>
        <TextField
          width="50%"
          id="email"
          text="E-mail*"
          value={_data?.email ?? ""}
          onChange={(e) =>
            _setData({
              ..._data,
              email: e.target.value,
            })
          }
          required
        />
        {!data?.id && (
          <TextField
            width="50%"
            id="password"
            text="Senha*"
            value={_data?.password ?? ""}
            onChange={(e) =>
              _setData({
                ..._data,
                password: e.target.value,
              })
            }
            required={!data?.id}
          />
        )}
      </S.Row>
      <S.Row className="margin-bottom-40">
        <TextField
          width="50%"
          id="phone"
          text="Telefone*"
          maxLength={15}
          value={maskPhone(_data?.contact?.phone ?? "") ?? ""}
          onChange={(e) =>
            _setData({
              ..._data,
              contact: { ..._data?.contact, phone: e.target.value },
            })
          }
          required
        />
      </S.Row>
      <S.Text>Dados de endereço</S.Text>
      <S.Row>
        <TextField
          width="20%"
          id="zipCode"
          text="CEP*"
          value={maskZipCode(_data?.address?.zipCode ?? "") ?? ""}
          maxLength={9}
          onChange={(e) =>
            _setData({
              ..._data,
              address: { ..._data?.address, zipCode: e.target.value },
            })
          }
          onBlur={({ target: { value } }) => getAddress(value)}
          required
        />
        <TextField
          width="80%"
          id="address"
          text="Endereço*"
          value={_data?.address?.address ?? ""}
          onChange={(e) =>
            _setData({
              ..._data,
              address: { ..._data?.address, address: e.target.value },
            })
          }
          required
        />
      </S.Row>
      <S.Row>
        <TextField
          width="20%"
          id="number"
          text="Número*"
          value={_data?.address?.number ?? ""}
          type="number"
          onChange={(e) =>
            _setData({
              ..._data,
              address: { ..._data?.address, number: e.target.value },
            })
          }
          onBlur={getGeocode}
          required
        />
        <TextField
          width="40%"
          id="complement"
          text="Complemento"
          value={_data?.address?.complement ?? ""}
          onChange={(e) =>
            _setData({
              ..._data,
              address: { ..._data?.address, complement: e.target.value },
            })
          }
        />
        <TextField
          width="40%"
          id="neighborhood"
          text="Bairro*"
          value={_data?.address?.neighborhood ?? ""}
          onChange={(e) =>
            _setData({
              ..._data,
              address: { ..._data?.address, neighborhood: e.target.value },
            })
          }
          required
        />
      </S.Row>
      <S.Row className="margin-bottom-40">
        <Select
          options={states}
          width="20%"
          variant="outlined"
          id="state"
          label="Estado"
          value={_data?.address?.state ?? ""}
          onChange={(e) =>
            _setData({
              ..._data,
              address: { ..._data?.address, state: e.target.value as string },
            })
          }
          required
        />
        <Select
          options={cities}
          width="38%"
          variant="outlined"
          id="city"
          label="Cidade"
          value={_data?.address?.city ?? ""}
          onChange={(e) =>
            _setData({
              ..._data,
              address: { ..._data?.address, city: e.target.value as string },
            })
          }
          required
        />
      </S.Row>
      <S.Text>Dados de entrega</S.Text>
      <S.Row>
        <TextField
          width="20%"
          id="maxVolume"
          text="Máximo de volumes*"
          value={_data?.maxVolume}
          type="number"
          onChange={(e) =>
            _setData({
              ..._data,
              maxVolume: Number(e.target.value),
            })
          }
          required
        />
        <TextField
          width="20%"
          id="maxWeight"
          text="Máximo de peso*"
          value={_data?.maxWeight}
          type="number"
          onChange={(e) =>
            _setData({
              ..._data,
              maxWeight: Number(e.target.value),
            })
          }
          required
        />
        <TextField
          width="20%"
          id="maxDistance"
          text="Máxima distância*"
          value={_data?.maxDistance}
          type="number"
          onChange={(e) =>
            _setData({
              ..._data,
              maxDistance: Number(e.target.value),
            })
          }
          required
        />
        <TextField
          width="20%"
          id="maxChargeableDistance"
          text="Máxima distância*"
          value={_data?.maxChargeableDistance}
          type="number"
          onChange={(e) =>
            _setData({
              ..._data,
              maxChargeableDistance: Number(e.target.value),
            })
          }
          required
        />
      </S.Row>
    </Modal>
  );
};

export default memo(NewEdit);
