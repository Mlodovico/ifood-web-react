import React, { useContext } from "react";
import { Container } from "./styles";
import { HeaderComponent } from "../../components/Header";
import { useTheme } from "../../context/ThemeContext";
import { ModalComponent } from "../../components/Modal/inde";

export const HomeScreen = () => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);

  return (
    <Container>
      <HeaderComponent />
      <h1>Home</h1>
      {showLoginModal && (
        <ModalComponent>
          <h1>Modal</h1>
        </ModalComponent>
      )}
    </Container>
  );
};
