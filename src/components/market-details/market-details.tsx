import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import CoinList from "../coin-list";
import { coinMarketDataApiUrl } from "../../services/api";
import { TailSpin } from "react-loader-spinner";
import PageNumbers from "../page-numbers";
import { IMarketData } from "../../types";

function MarketDetails() {
  const [data, error, isLoading] = useFetch(coinMarketDataApiUrl("usd"));
  const [paginatedData, setPaginatedData] = useState<IMarketData[]>([]);

  return (
    <>
      {isLoading ? (
        <TailSpin
          height="64"
          width="64"
          color="#8DC647"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{ margin: "0 auto" }}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <>
          <CoinList list={paginatedData} />
          <PageNumbers data={data} setPaginatedData={setPaginatedData} />
        </>
      )}
    </>
  );
}

export default MarketDetails;
