import { Nav, List, ListItem } from "./navbar.styles";

function Navbar() {
  return (
    <Nav>
      <h1>Project X</h1>
      <List>
        <ListItem to="/">Test</ListItem>
        <ListItem to="/market">Test</ListItem>
      </List>
    </Nav>
  );
}

export default Navbar;
