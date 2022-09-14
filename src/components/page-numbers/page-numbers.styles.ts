import styled from "styled-components";

const PageNumbersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 12px auto 0;
`;

const PageNumber = styled.div(
  ({ selected }: { selected: boolean }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid lightgray 1px;
  background-color: ${selected ? "var(--lighter-gray)" : "white"};
  padding: 0 12px;
  border-radius: 8px;
  height: 28px;
  width: 28px;

  @media (hover: hover){
    &:hover {
      background-color: var(--light-green);
      cursor: pointer;
      color: var(--lighter-gray);
    }
  }

  @media screen and (min-width: 480px) {
    height: 36px;
    width: 36px
  }
`
);

const PageNavigation = styled.div(
  ({ disabled }: { disabled: boolean }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid lightgray 1px;
  border-radius: 8px;
  height: 28px;
  width: 28px;

  @media (hover: hover) {
    &:hover {
      background-color: ${disabled ? "var(--slate)" : "var(--light-green)"};
      cursor: ${disabled ? "default" : "pointer"};
      pointer-events: ${disabled ? "none" : "auto"};
      color: ${disabled ? "black" : "var(--lighter-gray);"}
    }
  }

  @media screen and (min-width: 480px) {
    height: 36px;
    width: 36px
  }

`
);

export { PageNumbersContainer, PageNumber, PageNavigation };
