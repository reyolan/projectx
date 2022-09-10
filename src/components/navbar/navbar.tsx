import { Nav, List, ListItem } from "./navbar.styles";

function Navbar() {
  return (
    <Nav>
      <h1>Project X</h1>
      <List>
        <ListItem to="/">Home</ListItem>
        <ListItem to="/market">Market</ListItem>
      </List>
    </Nav>
  );
}

export default Navbar;
