import { Nav, List, ListItem, NavTitleLink } from "./navbar.styles";

function Navbar() {
  return (
    <Nav>
      <NavTitleLink to="/">Project X</NavTitleLink>
      <List>
        <ListItem to="/market">Market</ListItem>
      </List>
    </Nav>
  );
}

export default Navbar;
