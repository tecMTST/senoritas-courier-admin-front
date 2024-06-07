import React, { memo, useMemo } from "react";
import Modal from "../../components/Modal";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
}

const EditRouteDetails = ({ open, onClose, onSave }: Props): JSX.Element => {
  const buttons = useMemo(
    () => [
      {
        text: "Confirmar edição",
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
    <Modal open={open} buttons={buttons} title="Alterar detalhes da rota">
      <>
        <div>Editar detalhes</div>
      </>
    </Modal>
  );
};

export default memo(EditRouteDetails);
