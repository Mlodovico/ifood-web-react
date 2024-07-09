import React, { useEffect, useState, FC, useContext } from "react";
import { Container, Modal } from "./styles";
import { ThemeContext } from "styled-components";
import { useTheme } from "../../context/ThemeContext";

interface ModalComponentProps {
  children: React.ReactNode;
  flagModal: boolean;
}

export const ModalComponent: FC<ModalComponentProps> = ({ children, flagModal }) => {
  const {theme} = useTheme();
  const [showModal, setShowModal] = useState(flagModal);

  useEffect(() => {
    setShowModal(flagModal);
}, [flagModal]);

  return (
    <>
      {showModal && (
        <Container onClick={() => setShowModal(!showModal)}>
          <Modal theme={theme} onClick={(e) => e.stopPropagation()}>{children}</Modal>
        </Container>
      )}
    </>
  );
};
