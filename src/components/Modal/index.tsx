import React, { useEffect, useState, FC } from "react";
import { Container, Modal } from "./styles";

interface ModalComponentProps {
  children: React.ReactNode;
  flagModal: boolean;
}

export const ModalComponent: FC<ModalComponentProps> = ({ children, flagModal }) => {
  const [showModal, setShowModal] = useState(flagModal);

  useEffect(() => {
    setShowModal(flagModal);
}, [flagModal]);

  return (
    <>
      {showModal && (
        <Container onClick={() => setShowModal(!showModal)}>
          <Modal onClick={(e) => e.stopPropagation()}>{children}</Modal>
        </Container>
      )}
    </>
  );
};
