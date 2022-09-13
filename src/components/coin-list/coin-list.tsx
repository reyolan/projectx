import { useEffect, useState } from "react";
import {
  CoinTable,
  Percentage,
  Caption,
  CoinTableContainer,
} from "./coin-list.styled";
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
  return (
    <CoinTableContainer>
      <CoinTable>
        <Caption>Market Data</Caption>
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Symbol</th>
            <th scope="col">Price</th>
            <th scope="col">% Price Change (24h)</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Total Volume</th>
            <th scope="col">Fully Diluted Valuation</th>
            <th scope="col">24h High</th>
            <th scope="col">24h Low</th>
            <th scope="col">All-Time High</th>
            <th scope="col">All-Time High % Change</th>
            <th scope="col">All-Time High Date</th>
            <th scope="col">All-Time Low</th>
            <th scope="col">All-Time Low % Change</th>
            <th scope="col">All-Time Low Date</th>
            <th scope="col">Circulating Supply</th>
            <th scope="col">Total Supply</th>
            <th scope="col">Max Supply</th>
            <th scope="col">Last Updated</th>
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
    </CoinTableContainer>
  );
}

export default CoinList;
