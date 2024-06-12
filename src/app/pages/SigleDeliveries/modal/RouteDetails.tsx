import React, { memo, useCallback, useMemo, useState } from "react";
import { FormTDO } from "../../../utils/types";
import Modal from "../../../components/Modal";
import ViewRouteDetails from "./ViewRouteDetails";
import EditRouteDetails from "./EditRouteDetails";
import EditPayment from "./EditPayment";

interface Props {
  data?: FormTDO;
  open: boolean;
  onClose: () => void;
  onSave: () => void;
}

const RouteDetails = ({ data, open, onClose, onSave }: Props): JSX.Element => {
  const [selected, setSelected] = useState<
    "view" | "editDetails" | "editPayment"
  >("view");

  const close = useCallback(() => {
    if (selected === "view") onClose();
    else setSelected("view");
  }, [onClose, selected]);

  const save = useCallback(() => {
    alert("confirmar edição");
    setSelected("view");
  }, []);

  const render = useMemo(() => {
    switch (selected) {
      case "editDetails":
        return <EditRouteDetails data={data} />;

      case "editPayment":
        return <EditPayment data={data} />;

      default:
        return <ViewRouteDetails data={data} onEdit={setSelected} />;
    }
  }, [data, selected]);

  const title = useMemo(() => {
    switch (selected) {
      case "editDetails":
        return "Alterar detalhes da rota";

      case "editPayment":
        return "Alterar detalhes do pagamento";

      default:
        return "Rota";
    }
  }, [selected]);

  const subtitle = useMemo(() => {
    if (selected === "view")
      return `Entregas avulsas / Pedido ${data?.code ?? ""}`;
    return "";
  }, [data?.code, selected]);

  const buttons = useMemo(
    () => [
      {
        text: selected === "view" ? "Salvar e sair" : "Confirmar edição",
        onClick: selected === "view" ? onSave : save,
        primary: true,
      },

      {
        text: "Cancelar",
        onClick: close,
        inline: true,
      },
    ],
    [close, onSave, save, selected]
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      buttons={buttons}
      title={title}
      subtitle={subtitle}
      width="60vw"
      isFull={selected !== "view"}
      padding={selected !== "view" ? "0" : "0 40px"}
    >
      {render}
    </Modal>
  );
};

export default memo(RouteDetails);
