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

export interface PropsBikers {
  onClick: (view: "list" | "order" | "route") => void;
  biker?: string;
  order?: string;
  setId?: Dispatch<SetStateAction<string | undefined>>;
}

const Bikers = (): JSX.Element => {
  const [view, setView] = useState<"list" | "order" | "route">("list");
  const [biker, setBiker] = useState<string>();
  const [order, setOrder] = useState<string>();

  const onClick = useCallback(
    (value: "list" | "order" | "route") => setView(value),
    []
  );

  const render = useMemo(() => {
    switch (view) {
      case "order":
        return <Order onClick={onClick} biker={biker} setId={setOrder} />;

      case "route":
        return <Route onClick={onClick} biker={biker} order={order} />;

      default:
        return <List onClick={onClick} setId={setBiker} />;
    }
  }, [biker, onClick, order, view]);

  return <>{render}</>;
};

export default memo(Bikers);
