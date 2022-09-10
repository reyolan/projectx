import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 48px;
  border-bottom: solid var(--light-border-color) 1px;
`;

const List = styled.ul`
  display: flex;
  gap: 12px;
`;

const ListItem = styled(Link)`
  font-size: var(--base-text);
  font-weight: 600;
  color: black;

  &:hover {
    opacity: 0.8;
  }
`;

export { Nav, List, ListItem };
