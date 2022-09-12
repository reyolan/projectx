import styled from "styled-components";

const PageNumbersContainer = styled.div`
  display: flex;
  gap: 6px;
`;

const PageNumber = styled.div(
  ({ selected }: { selected: boolean }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid black 1px;
  background-color: ${selected ? "yellow" : "white"}
`
);

export { PageNumbersContainer, PageNumber };
