import Title from "../shared/title";
import Subtitle from "../shared/subtitle";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  return (
    <div>
      <Title>404: Not Found</Title>
      <Subtitle>No match for {location.pathname}</Subtitle>
    </div>
  );
}
