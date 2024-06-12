import React, { Dispatch, SetStateAction, memo, useState } from "react";
import TextField from "../../../components/Inputs/textField";
import Select from "../../../components/Inputs/select";
import { DeliveryStatus } from "../../../utils/constants";
import { FormTDO } from "../../../utils/types";
import { MockBikers } from "../../../utils/mocks";
import * as S from "./style";

interface Props {
  data?: FormTDO;
}

interface PropsRD {
  deliveryName?: string;
  pickupAddress?: string;
  deliveryAddress?: string;
  setDeliveryName: Dispatch<SetStateAction<string>>;
  setPickupAddress: Dispatch<SetStateAction<string>>;
  setDeliveryAddress: Dispatch<SetStateAction<string>>;
}

const RouteDetails = ({
  deliveryName,
  pickupAddress,
  deliveryAddress,
  setDeliveryName,
  setPickupAddress,
  setDeliveryAddress,
}: PropsRD): JSX.Element => (
  <S.Container $padding="0 40px">
    <S.Column $gap={16}>
      <TextField
        width="100%"
        variant="filled"
        id="delivery-name"
        text="Destinatário"
        value={deliveryName}
        onChange={(e) => setDeliveryName(e.target.value)}
      />
      <TextField
        width="100%"
        id="pickup-address"
        variant="filled"
        text="Endereço de coleta"
        value={pickupAddress}
        onChange={(e) => setPickupAddress(e.target.value)}
      />
      <TextField
        width="100%"
        id="delivery-address"
        variant="filled"
        text="Endereço de entrega"
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
      />
    </S.Column>
  </S.Container>
);

const DeliveryDetails = (): JSX.Element => (
  <>
    <S.Container $padding="0 40px">
      <S.Row $padding=" 48px 0 8px 0">
        <S.Title>Alterar detalhes da entrega</S.Title>
      </S.Row>
    </S.Container>
    <S.Divider $width="100%" />
    <S.Container $padding="0 40px">
      <S.Row $justifyContent="normal" $gap={48}>
        <Select
          classname="without-label"
          variant="outlined"
          label="Biker responsável"
          options={MockBikers.map((item) => ({
            value: item?.name ?? "",
            label: item?.name ?? "",
          }))}
        />
        <Select
          classname="without-label"
          variant="outlined"
          label="Status da entrega"
          options={DeliveryStatus}
        />
      </S.Row>
    </S.Container>
  </>
);

const EditRouteDetails = ({ data }: Props): JSX.Element => {
  const [deliveryName, setDeliveryName] = useState<string>(
    data?.delivery?.name ?? ""
  );
  const [deliveryAddress, setDeliveryAddress] = useState<string>(
    data?.delivery?.address ?? ""
  );
  const [pickupAddress, setPickupAddress] = useState<string>(
    data?.pickup?.address ?? ""
  );

  return (
    <>
      <RouteDetails
        deliveryName={deliveryName}
        pickupAddress={pickupAddress}
        deliveryAddress={deliveryAddress}
        setDeliveryName={setDeliveryName}
        setPickupAddress={setPickupAddress}
        setDeliveryAddress={setDeliveryAddress}
      />
      <DeliveryDetails />
    </>
  );
};

export default memo(EditRouteDetails);
