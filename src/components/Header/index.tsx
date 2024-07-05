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
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <ModalLoginButton>Acessar</ModalLoginButton>
          </div>
        </ModalLoginWrapper>
      </ModalComponent>
      <ModalComponent flagModal={showSignUpModal}>
        <div>
          <ModalLoginTitle>Acesse sua conta</ModalLoginTitle>
          <ModalLoginDescrition>
            Coloque os dados necessarios para cadastrar sua conta
          </ModalLoginDescrition>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <ModalLoginInputText>Nome</ModalLoginInputText>
              <ModalLoginInput placeholder="Nome" type="text" autoFocus />
            </div>
            <div>
              <ModalLoginInputText>CPF</ModalLoginInputText>
              <ModalLoginInput placeholder="CPF" type="text" />
            </div>
          </div>
          <ModalLoginInputText>Email</ModalLoginInputText>
          <ModalLoginInput placeholder="Email" type="email" autoFocus />
          <ModalLoginInputText>Senha</ModalLoginInputText>
          <ModalLoginInput placeholder="Password" type="password" />
          <ModalLoginInputText>Senha Novamente</ModalLoginInputText>
          <ModalLoginInput placeholder="Password" type="password" />
        </div>
        <div style={{ display: "flex", marginTop: "20px", justifyContent: "center", width: "100%" }}>
          <ModalLoginButton>Cadastrar</ModalLoginButton>
        </div>
      </ModalComponent>
    </>
  );
};
