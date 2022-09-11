import { useEffect, useState } from "react";
import { CoinTable, Percentage } from "./coin-list.styled";
import { IMarketData } from "../../types";
import { convertToUSD, isPositive } from "../../utils/helpers";
import CoinName from "../coin-name";

interface ICoinListProps {
  list: IMarketData[];
}

function CoinList({ list }: ICoinListProps) {
  // Image Bitcoin(btc)
  // usePagination hook

  useEffect(() => {}, []);

  return (
    <CoinTable>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>% Change (24h)</th>
          <th>Market Cap</th>
          <th>Total Volume</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.market_cap_rank}</td>
              <td>
                <CoinName name={item.name} logoUrl={item.image} />
              </td>
              <td>{item.symbol.toUpperCase()}</td>
              <td>{convertToUSD(item.current_price)}</td>
              <td>
                <Percentage
                  positive={isPositive(item.price_change_percentage_24h)}
                >
                  {item.price_change_percentage_24h + "%"}
                </Percentage>
              </td>
              <td>{convertToUSD(item.market_cap)}</td>
              <td>{convertToUSD(item.total_volume)}</td>
            </tr>
          );
        })}
      </tbody>
    </CoinTable>
  );
}

export default CoinList;
