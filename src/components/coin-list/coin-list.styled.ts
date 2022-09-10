import styled from "styled-components";

const CoinTable = styled.table`
  border: none;
  border-collapse: collapse;

  thead,
  tbody > tr {
    border-top: 1px solid var(--light-border-color);
    border-bottom: 1px solid var(--light-border-color);
  }

  th,
  td {
    padding: 6px 0;
  }
`;

export { CoinTable };
