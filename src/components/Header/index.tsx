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

interface formSignUpInterface {
  completedName: string;
  document: string;
  email: string;
  password: string;
}

interface formLoginInterface {
  email: string;
  password: string;
}

export const HeaderComponent: FC = () => {
  const { toggleTheme } = useTheme();
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false);
  const [formLoginData, setFormLoginData] = useState<formLoginInterface>({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState<formSignUpInterface>({
    completedName: "",
    document: "",
    email: "",
    password: "",
  });

  const toggleModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const checkPassword = (password: string): boolean => {
    return formData.password === password ? true : false;
  };

  console.log(formData);

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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
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
              <ModalLoginInput
                placeholder="Nome completo"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, completedName: e.target.value })
                }
              />
            </div>
            <div>
              <ModalLoginInputText>CPF</ModalLoginInputText>
              <ModalLoginInput
                placeholder="CPF"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, document: e.target.value })
                }
              />
            </div>
          </div>
          <ModalLoginInputText>Email</ModalLoginInputText>
          <ModalLoginInput
            placeholder="Email"
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <ModalLoginInputText>Senha</ModalLoginInputText>
          <ModalLoginInput
            placeholder="Password"
            type="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <ModalLoginInputText>Senha Novamente</ModalLoginInputText>
          <ModalLoginInput
            placeholder="Password"
            type="password"
            onChange={(e) => checkPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <ModalLoginButton>Cadastrar</ModalLoginButton>
        </div>
      </ModalComponent>
    </>
  );
};
