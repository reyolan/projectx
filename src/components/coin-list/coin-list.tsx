import { useEffect, useState } from "react";
import { CoinTable, Percentage } from "./coin-list.styled";
import { IMarketData } from "../../types";
import {
  convertIsoToDateString,
  convertToPercentage,
  convertToUSD,
  isPositive,
} from "../../utils/helpers";
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
          <th>% Price Change (24h)</th>
          <th>Market Cap</th>
          <th>Total Volume</th>
          <th>Fully Diluted Valuation</th>
          <th>24h High</th>
          <th>24h Low</th>
          <th>All-Time High</th>
          <th>All-Time High % Change</th>
          <th>All-Time High Date</th>
          <th>All-Time Low</th>
          <th>All-Time Low % Change</th>
          <th>All-Time Low Date</th>
          <th>Circulating Supply</th>
          <th>Total Supply</th>
          <th>Max Supply</th>
          <th>Last Updated</th>
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
                  {convertToPercentage(item.price_change_percentage_24h)}
                </Percentage>
              </td>
              <td>{convertToUSD(item.market_cap)}</td>
              <td>{convertToUSD(item.total_volume)}</td>
              <td>
                {item.fully_diluted_valuation
                  ? item.fully_diluted_valuation.toLocaleString()
                  : "-"}
              </td>
              <td>{convertToUSD(item.high_24h)}</td>
              <td>{convertToUSD(item.low_24h)}</td>
              <td>{convertToUSD(item.ath)}</td>
              <td>
                <Percentage positive={isPositive(item.ath_change_percentage)}>
                  {convertToPercentage(item.ath_change_percentage)}
                </Percentage>
              </td>
              <td>{convertIsoToDateString(item.ath_date)}</td>
              <td>{convertToUSD(item.atl)}</td>
              <td>
                <Percentage positive={isPositive(item.atl_change_percentage)}>
                  {convertToPercentage(item.atl_change_percentage)}
                </Percentage>
              </td>
              <td>{convertIsoToDateString(item.atl_date)}</td>
              <td>{item.circulating_supply.toLocaleString()}</td>
              <td>
                {item.total_supply ? item.total_supply.toLocaleString() : "-"}
              </td>
              <td>
                {item.max_supply ? item.total_supply.toLocaleString() : "-"}
              </td>
              <td>{item.last_updated}</td>
            </tr>
          );
        })}
      </tbody>
    </CoinTable>
  );
}

export default CoinList;
