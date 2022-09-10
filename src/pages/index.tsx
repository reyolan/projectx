import Title from "../shared/title";
import LinkButton from "../shared/link";

export default function Home() {
  return (
    <div>
      <Title>Project X</Title>
      <LinkButton to="/market">See Market</LinkButton>
    </div>
  );
}
