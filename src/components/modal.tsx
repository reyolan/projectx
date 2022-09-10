import styled from "styled-components";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Container = styled.div`
  position: absolute;
`;

const CloseButton = styled.button``;

export default function Modal({ children }: ModalProps) {
  return (
    <Container>
      <CloseButton />
      {children}
    </Container>
  );
}
