import styled from "styled-components";

const CoinTable = styled.table`
  border: none;
  border-collapse: collapse;

  thead,
  tbody > tr {
    border-top: 1px solid var(--light-border-color);
    border-bottom: 1px solid var(--light-border-color);
    &:hover {
      background-color: lightgray;
    }
  }

  th,
  td {
    padding: 6px 12px;
  }
`;

const Percentage = styled.p(
  ({ positive }: { positive: boolean }) => `
    color: ${positive ? "green" : "red"};
  `
);
export { CoinTable, Percentage };
