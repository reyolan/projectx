import { useEffect } from "react";
import CoinList from "../coin-list";
import { MarketDetailsContainer } from "./market-details.styles";

function MarketDetails() {
  return (
    <MarketDetailsContainer>
      <CoinList />
    </MarketDetailsContainer>
  );
}

export default MarketDetails;
