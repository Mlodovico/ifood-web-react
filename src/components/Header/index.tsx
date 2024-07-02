import {  useEffect, useState, FC } from "react";

import { useTheme } from "../../context/ThemeContext";
import { ModalComponent } from "../Modal";
import {
  Container,
  ConfigOptionsWrapper,
  SubjectContainer,
  Button,
  Subject,
} from "./styles";

export const HeaderComponent: FC = () => {
  const { toggleTheme } = useTheme();
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <>
      <Container id="header">
        <SubjectContainer>
          <Subject>Home</Subject>
          <Subject>Restaurants</Subject>
          <Subject>Drinks</Subject>
        </SubjectContainer>
        <ConfigOptionsWrapper>
          <Button onClick={() => toggleModal()}>
            Logar
          </Button>
          <Button className="sign-up-button-modal" onClick={() => setShowSignUpModal(!showSignUpModal)}>Criar conta</Button>
          <Button className="toggle-button-theme" onClick={toggleTheme}>Toggle Theme</Button>
        </ConfigOptionsWrapper>
      </Container>
      <ModalComponent flagModal={showLoginModal}>
        <h1>Login Modal</h1>
      </ModalComponent>
      <ModalComponent flagModal={showSignUpModal}>
        <h1>Cadastro Modal</h1>
      </ModalComponent>
    </>
  );
};
