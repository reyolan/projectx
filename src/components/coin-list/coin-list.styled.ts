import styled from "styled-components";

const CoinTableContainer = styled.div`
  overflow: auto;
`;

const CoinTable = styled.table`
  border: none;
  border-collapse: collapse;

  thead,
  tbody > tr {
    border-top: 1px solid var(--light-border-color);
    border-bottom: 1px solid var(--light-border-color);
  }

  tbody > tr {
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

const Caption = styled.caption`
  font-size: var(--2xl-text);
  text-align: left;
  font-weight: bold;
`;
export { CoinTable, Percentage, Caption, CoinTableContainer };
