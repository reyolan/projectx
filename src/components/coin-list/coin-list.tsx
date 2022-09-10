import useToggle from "../../hooks/useToggle";
import { List, CoinListItem } from "./coin-list.styled";

function CoinList() {
  const [isClicked, invertIsClicked] = useToggle(false);

  return (
    <List>
      <CoinListItem>Hello</CoinListItem>
      <CoinListItem>Hi</CoinListItem>
      <CoinListItem>No hello</CoinListItem>
      <CoinListItem>BTC COIN</CoinListItem>
    </List>
  );
}

export default CoinList;
