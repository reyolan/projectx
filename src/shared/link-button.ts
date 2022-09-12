import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-slate);
  border-radius: 5px;
  padding: 8px 16px;
  color: black;
  font-weight: bold;
  border-radius: 16px;
  font-size: var(--3xl-text);
  width: fit-content;
  margin: 0 auto;

  &:hover {
    color: white;
    background-color: var(--light-green);
  }
`;

export default LinkButton;
