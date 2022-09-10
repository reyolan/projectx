import { CoinNameContainer, CoinLogo } from "./coin-name.styled";

interface ICoinNameProps {
  name: string;
  logoUrl: string;
}

function CoinName({ name, logoUrl }: ICoinNameProps) {
  return (
    <CoinNameContainer>
      <CoinLogo src={logoUrl} />
      <p>{name}</p>
    </CoinNameContainer>
  );
}

export default CoinName;
