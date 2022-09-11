import Title from "../../shared/title";
import MarketDetails from "../../components/market-details";
import PageContainer from "../../shared/page-container";

export default function MarketList() {
  return (
    <PageContainer>
      <Title>Market Data</Title>
      <MarketDetails />
    </PageContainer>
  );
}
