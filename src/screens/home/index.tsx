import React, { useContext } from "react";

import { Container } from "./styles";

import { HeaderComponent } from "../../components/Header";

export const HomeScreen = () => {

  return (
    <Container>
      <HeaderComponent />
      <h1>Home</h1>
    </Container>
  );
};
