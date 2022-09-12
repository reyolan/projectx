import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 64px;
  border-bottom: solid var(--light-slate) 1px;
`;

const NavTitle = styled.h1`
  font-size: var(--2xl-text);
`;

const List = styled.ul`
  display: flex;
  gap: 16px;
`;

const ListItem = styled(Link)`
  font-size: var(--xl-text);
  font-weight: 400;
  color: black;

  &:hover {
    color: var(--light-green);
  }
`;

export { Nav, List, ListItem, NavTitle };
