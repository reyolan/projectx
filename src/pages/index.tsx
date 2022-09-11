import Title from "../shared/title";
import LinkButton from "../shared/link";
import PageContainer from "../shared/page-container";

export default function Home() {
  return (
    <PageContainer>
      <Title>Project X</Title>
      <LinkButton to="/market">See Market</LinkButton>
    </PageContainer>
  );
}
