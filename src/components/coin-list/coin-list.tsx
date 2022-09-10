import { useEffect, useState } from "react";
import { CoinTable } from "./coin-list.styled";
import { IMarketData } from "../../types";
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
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, i) => {
          return (
            <tr key={i}>
              <td>
                <CoinName name={item.name} logoUrl={item.image} />
              </td>
              <td>5</td>
            </tr>
          );
        })}
      </tbody>
    </CoinTable>
  );
}

export default CoinList;
