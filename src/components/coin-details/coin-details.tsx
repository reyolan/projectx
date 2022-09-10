import { IMarketData } from "../../types";
import { useState, useEffect } from "react";

interface ICoinDetailsProps {
  clickedCoin: string;
  data: IMarketData[];
}

function CoinDetails({ clickedCoin, data }: ICoinDetailsProps) {
  const [clickedCoinDetail, setClickedCoinDetail] =
    useState<IMarketData | null>(null);

  useEffect(() => {
    const foundClickedCoinDetail =
      data.find(item => item.name === clickedCoin) ?? null;
    setClickedCoinDetail(foundClickedCoinDetail);
  }, [clickedCoin]);

  return <h1>{clickedCoinDetail?.current_price}</h1>;
}

export default CoinDetails;
