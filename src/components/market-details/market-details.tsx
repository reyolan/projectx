import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import CoinList from "../coin-list";
import { coinMarketDataApiUrl } from "../../services/api";
import { TailSpin } from "react-loader-spinner";
import { MarketDetailsContainer } from "./market-details.styles";

function MarketDetails() {
  const [data, error, isLoading] = useFetch(coinMarketDataApiUrl("usd"));

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <TailSpin
          height="64"
          width="64"
          color="#8DC647"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <>
          <CoinList list={data} />
        </>
      )}
    </>
  );
}

export default MarketDetails;
