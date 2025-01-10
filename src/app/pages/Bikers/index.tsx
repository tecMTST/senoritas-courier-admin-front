import React, { memo, useCallback, useState } from "react";
import { Biker } from "../../utils/types";
import ViewItinerary from "./viewItinerary";
import ViewBikers from "./viewBikers";

const Bikers = (): JSX.Element => {
  const [view, setView] = useState<"biker" | "itinerary">("biker");
  const [bikerId, setBikerId] = useState("");

  const onBiker = useCallback(() => {
    setView("biker");
    setBikerId("");
  }, []);

  const onItinerary = useCallback((row: Biker) => {
    setView("itinerary");
    setBikerId(row?.id ?? "");
  }, []);

  return view === "itinerary" && !!bikerId ? (
    <ViewItinerary bikerId={bikerId} onBiker={onBiker} />
  ) : (
    <ViewBikers onItinerary={onItinerary} />
  );
};

export default memo(Bikers);
