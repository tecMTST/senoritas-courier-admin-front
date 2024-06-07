import React, { memo, useCallback, useState } from "react";
import ViewRouteDetails from "./ViewRouteDetails";
import EditRouteDetails from "./EditRouteDetails";
import EditPayment from "./EditPayment";

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

  switch (selected) {
    case "editDetails":
      return <EditRouteDetails open={open} onClose={close} onSave={save} />;

    case "editPayment":
      return <EditPayment open={open} onClose={close} onSave={save} />;

    default:
      return (
        <ViewRouteDetails
          data={data}
          open={open}
          onClose={close}
          onSave={onSave}
          onEdit={setSelected}
        />
      );
  }
};

export default memo(RouteDetails);
