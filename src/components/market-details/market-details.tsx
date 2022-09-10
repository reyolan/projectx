import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import CoinDetails from "../coin-details";
import CoinList from "../coin-list";
import { coinMarketDataApiUrl } from "../../services/api";
import { TailSpin } from "react-loader-spinner";
import { MarketDetailsContainer } from "./market-details.styles";

function MarketDetails() {
  const [data, error, isLoading] = useFetch(coinMarketDataApiUrl("usd"));
  const [clickedCoin, setClickedCoin] = useState("");

  // track clicked link
  // create coin details component, pass the data there and we'll send the clicked link
  // there to find the exact data for that table

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <MarketDetailsContainer>
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
          <CoinList list={data} setClickedCoin={setClickedCoin} />
          <CoinDetails clickedCoin={clickedCoin} data={data} />
        </>
      )}
    </MarketDetailsContainer>
  );
}

export default MarketDetails;
