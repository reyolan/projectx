import styled from "styled-components";

const PageNumbersContainer = styled.div`
  display: flex;
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

export { PageNumbersContainer, PageNumber, PageNavigation };
