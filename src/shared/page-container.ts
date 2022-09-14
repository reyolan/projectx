import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 12px 32px;
  background-color: var(--slate);
  min-height: calc(100vh - 64px);

  @media screen and (min-width: 480px) {
    padding: 12px 64px;
  }
`;

export default PageContainer;
