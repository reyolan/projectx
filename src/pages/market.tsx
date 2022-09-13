import MarketDetails from "../components/market-details";
import PageContainer from "../shared/page-container";

export default function MarketList() {
  return (
    <PageContainer full={false}>
      <MarketDetails />
    </PageContainer>
  );
}
