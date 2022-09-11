import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border: solid black 1px;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    max-width: 540px;
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 992px) {
    max-width: 100%;
  }
`;
