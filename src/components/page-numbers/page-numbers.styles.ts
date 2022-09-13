import styled from "styled-components";

const PageNumbersContainer = styled.div`
  display: flex;
  gap: 6px;
  margin: 0 auto;
  padding-top: 6px;
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
  height: 36px;
  width: 36px;

  &:hover {
    background-color: var(--light-green);
    cursor: pointer;
    color: var(--lighter-gray);
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
  height: 36px;
  width: 36px;

  &:hover {
    background-color: ${disabled ? "var(--slate)" : "var(--light-green)"};
    cursor: ${disabled ? "default" : "pointer"};
    pointer-events: ${disabled ? "none" : "auto"};
    color: ${disabled ? "black" : "var(--lighter-gray);"}

`
);

const DotText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2px 6px;
  height: 36px;
  width: 36px;
`;

export { PageNumbersContainer, PageNumber, PageNavigation, DotText };
