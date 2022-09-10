import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { coinMarketDataApiUrl } from "../../services/api";
import { MarketDetailsContainer } from "./market-details.styles";
import CoinList from "../coin-list";

function MarketDetails() {
  const [data, error, isLoading] = useFetch(coinMarketDataApiUrl("usd"));

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <MarketDetailsContainer>
      {!isLoading && <CoinList list={data} />}
    </MarketDetailsContainer>
  );
}

export default MarketDetails;
