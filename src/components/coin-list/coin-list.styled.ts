import styled from "styled-components";

const CoinTableContainer = styled.div`
  overflow-x: scroll;
  height: 100%;
`;

const CoinTable = styled.table`
  border: none;
  border-collapse: collapse;
  table-layout: fixed;
  height: 100%;

  thead,
  tbody > tr {
    border-top: 1px solid var(--light-slate);
    border-bottom: 1px solid var(--light-slate);
  }

  tbody > tr {
    &:hover {
      background-color: lightgray;
    }
  }

  th {
    white-space: pre;
  }

  td {
    padding: 0px 32px;
    height: 70px;
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
