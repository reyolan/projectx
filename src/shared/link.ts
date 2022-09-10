import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-green);
  border-radius: 5px;
`;

export default LinkButton;
