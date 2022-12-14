import {
  CoinTable,
  Percentage,
  Caption,
  CoinTableContainer,
} from "./coin-list.styles";
import { IMarketData } from "../../types";
import {
  convertIsoToDateString,
  convertIsoToDateTimeString,
  convertToPercentage,
  convertToUSD,
  isPositive,
  showValueOrDash,
} from "../../utils/helpers";
import CoinName from "../coin-name";

const COIN_LIST_HEADER_COLUMNS = [
  "Rank",
  "Name",
  "Symbol",
  "Price",
  "% Price Change\n(24h)",
  "Market Cap",
  "Total Volume",
  "Fully Diluted\nValuation",
  "24h High",
  "24h Low",
  "All-Time\nHigh",
  "All-Time High\n% Change",
  "All-Time High\nDate",
  "All-Time\nLow",
  "All-Time Low\n% Change",
  "All-Time Low\nDate",
  "Circulating Supply",
  "Total Supply",
  "Max Supply",
  "Last Updated",
] as const;

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
            {COIN_LIST_HEADER_COLUMNS.map((item, i) => (
              <th scope="col" key={i}>
                {item}
              </th>
            ))}
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
                <td>{convertToUSD(item.fully_diluted_valuation)}</td>
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
                <td>{showValueOrDash(item.total_supply)}</td>
                <td>{showValueOrDash(item.max_supply)}</td>
                <td>{convertIsoToDateTimeString(item.last_updated)}</td>
              </tr>
            );
          })}
        </tbody>
      </CoinTable>
    </CoinTableContainer>
  );
}

export default CoinList;
