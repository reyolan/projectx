import { useEffect, useState } from "react";
import useToggle from "../../hooks/useToggle";
import { List, CoinListItem } from "./coin-list.styled";
import { IMarketData } from "../../types";

interface ICoinListProps {
  list: IMarketData[];
}

interface ICoinNames {
  name: string;
  symbol: string;
  image: string;
}

function CoinList({ list }: ICoinListProps) {
  const [isClicked, invertIsClicked] = useToggle(false);
  // Image Bitcoin(btc)

  const [coinNames, setCoinNames] = useState<ICoinNames[]>([]);

  useEffect(() => {
    const mappedCoinNames = list.map(item => {
      return { name: item.name, symbol: item.symbol, image: item.image };
    });

    setCoinNames(mappedCoinNames);
  }, []);

  return (
    <List>
      {coinNames.map((item, i) => {
        return <CoinListItem key={i}>{item.name}</CoinListItem>;
      })}
    </List>
  );
}

export default CoinList;
