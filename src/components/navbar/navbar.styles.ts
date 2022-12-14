import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 64px;
  border-bottom: solid var(--light-slate) 1px;

  @media screen and (min-width: 480px) {
    padding: 0px 64px;
  }
`;

const NavTitleLink = styled(Link)`
  font-size: var(--2xl-text);
  font-weight: 700;
  color: var(--light-green);
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

export { Nav, List, ListItem, NavTitleLink };
