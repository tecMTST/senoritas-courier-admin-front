import React, { memo, useCallback, useState } from "react";
import ViewOrder from "./viewOrder";
import ViewItinerary from "./viewItinerary";
import { OrderFormTDO } from "../../utils/types";

const MultipleDeliveries = (): JSX.Element => {
  const [view, setView] = useState<"order" | "itinerary">("order");
  const [selected, setSelected] = useState<OrderFormTDO>();

  const onOrder = useCallback(() => {
    setView("order");
    setSelected(undefined);
  }, []);

  const onItinerary = useCallback((row: OrderFormTDO) => {
    setView("itinerary");
    setSelected(row);
  }, []);

  return view === "itinerary" && !!selected ? (
    <ViewItinerary order={selected} onOrder={onOrder} />
  ) : (
    <ViewOrder onItinerary={onItinerary} />
  );
};

export default memo(MultipleDeliveries);
