import { useEffect, useState, FC } from "react";

import { useTheme } from "../../context/ThemeContext";
import { ModalComponent } from "../Modal";
import {
  Container,
  ConfigOptionsWrapper,
  SubjectContainer,
  Button,
  Subject,
  ModalLoginTitle,
  ModalLoginDescrition,
  ModalLoginInput,
  ModalLoginButton,
  ModalLoginInputText,
  ModalLoginWrapper,
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
          <Button onClick={() => toggleModal()}>Logar</Button>
          <Button
            className="sign-up-button-modal"
            onClick={() => setShowSignUpModal(!showSignUpModal)}
          >
            Criar conta
          </Button>
          <Button className="toggle-button-theme" onClick={toggleTheme}>
            Toggle Theme
          </Button>
        </ConfigOptionsWrapper>
      </Container>
      <ModalComponent flagModal={showLoginModal}>
        <ModalLoginWrapper>
          <div>
            <ModalLoginTitle>Acesse sua conta</ModalLoginTitle>
            <ModalLoginDescrition>
              Coloque seus dados para acessar sua conta no ifood e fazer seus
              pedidos
            </ModalLoginDescrition>
            <ModalLoginInputText>Email</ModalLoginInputText>
            <ModalLoginInput placeholder="Email" type="email" autoFocus />
            <ModalLoginInputText>Senha</ModalLoginInputText>
            <ModalLoginInput placeholder="Password" type="password" />
          </div>
          <div>
            <ModalLoginButton>Acessar</ModalLoginButton>
          </div>
        </ModalLoginWrapper>
      </ModalComponent>
      <ModalComponent flagModal={showSignUpModal}>
        <h1>Cadastro Modal</h1>
      </ModalComponent>
    </>
  );
};
