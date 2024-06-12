import React, {
  Dispatch,
  SetStateAction,
  memo,
  useCallback,
  useMemo,
  useState,
} from "react";
import List from "./views/List";
import Order from "./views/Order";
import Route from "./views/Route";

export interface PropsMultiple {
  onClick: (view: "list" | "order" | "route") => void;
  route?: string;
  order?: string;
  setId?: Dispatch<SetStateAction<string | undefined>>;
}

const MultipleDeliveries = (): JSX.Element => {
  const [view, setView] = useState<"list" | "order" | "route">("list");
  const [route, setRoute] = useState<string>();
  const [order, setOrder] = useState<string>();

  const onClick = useCallback(
    (value: "list" | "order" | "route") => setView(value),
    []
  );

  const render = useMemo(() => {
    switch (view) {
      case "order":
        return <Order onClick={onClick} order={order} setId={setRoute} />;

      case "route":
        return <Route onClick={onClick} route={route} order={order} />;

      default:
        return <List onClick={onClick} setId={setOrder} />;
    }
  }, [onClick, order, route, view]);

  return <>{render}</>;
};

export default memo(MultipleDeliveries);
