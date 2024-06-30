import React, { useContext } from "react";
import { Container } from "./styles";
import { HeaderComponent } from "../../components/Header";
import { useTheme } from "../../context/ThemeContext";
import { ModalComponent } from "../../components/Modal/inde";

export const HomeScreen = () => {

  return (
    <Container>
      <HeaderComponent />
      <h1>Home</h1>
    </Container>
  );
};
