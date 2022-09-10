import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled(Link)`
  font-size: 12px;

  &:hover {
    opacity: 0.8;
  }
`;

export { Nav, List, ListItem };
