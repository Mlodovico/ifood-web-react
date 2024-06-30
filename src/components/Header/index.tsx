import { useEffect, useState } from "react";

import { useTheme } from "../../context/ThemeContext";
import { ModalComponent } from "../Modal/inde";
import {
  Container,
  ConfigOptionsWrapper,
  SubjectContainer,
  Button,
  Subject,
} from "./styles";

export const HeaderComponent = () => {
  const { toggleTheme } = useTheme();
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <>
      <Container>
        <SubjectContainer>
          <Subject>Home</Subject>
          <Subject>Restaurants</Subject>
          <Subject>Drinks</Subject>
        </SubjectContainer>
        <ConfigOptionsWrapper>
          <Button onClick={() => toggleModal()}>
            Logar
          </Button>
          <Button>Criar conta</Button>
          <Button onClick={toggleTheme}>Toggle Theme</Button>
        </ConfigOptionsWrapper>
      </Container>
      <ModalComponent flagModal={showLoginModal}>
        <h1>Login Modal</h1>
      </ModalComponent>
    </>
  );
};
