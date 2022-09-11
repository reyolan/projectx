import Title from "../shared/title";
import Subtitle from "../shared/subtitle";
import { useLocation } from "react-router-dom";
import PageContainer from "../shared/page-container";

export default function NotFound() {
  const location = useLocation();
  return (
    <PageContainer>
      <Title>404: Not Found</Title>
      <Subtitle>No match for {location.pathname}</Subtitle>
    </PageContainer>
  );
}
