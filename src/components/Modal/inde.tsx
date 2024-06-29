import React from "react"
import { Container, Modal } from "./styles"

interface ModalComponentProps {
    children: React.ReactNode;
  }
  
  export const ModalComponent: React.FC<ModalComponentProps> = ({ children }) => {
    return (
        <Container>
            <Modal>
                {children}
            </Modal>
        </Container>
    )
}