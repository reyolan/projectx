import { Nav, List, ListItem, NavTitle } from "./navbar.styles";

function Navbar() {
  return (
    <Nav>
      <NavTitle>Project X</NavTitle>
      <List>
        <ListItem to="/">Home</ListItem>
        <ListItem to="/market">Market</ListItem>
      </List>
    </Nav>
  );
}

export default Navbar;
