import React, { useState } from "react";

import { Container, Carousel } from "./styles";

import { HeaderComponent } from "../../components/Header";
import { CardsComponent } from "../../components/Cards";

export const HomeScreen = () => {
  const [categorys, setCategorys] = useState([
    { id: 1, name: "Pizza" },
    { id: 2, name: "Hamburguer" },
    { id: 3, name: "Bebidas" },
  ]);

  return (
    <Container>
      <HeaderComponent />
      <Carousel>
        {categorys.map((categorys) => (
          <CardsComponent />
        ))}
      </Carousel>
    </Container>
  );
};
