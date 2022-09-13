import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 12px 64px;
  background-color: var(--slate);
  ${({ full }: { full: boolean }) =>
    full &&
    `
    height: 100%;
  `}
`;

export default PageContainer;
