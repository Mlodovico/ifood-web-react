import React, { useState } from "react";

import { Container, Carousel } from "./styles";

import { HeaderComponent } from "../../components/Header";
import { CardsComponent } from "../../components/Cards";

export const HomeScreen = () => {
  const [categorys, setCategorys] = useState([
    {
      id: 1,
      name: "Massas",
      subtitle:
        "Explore a riqueza das massas italianas com uma seleção de pratos irresistíveis. Buon appetito!",
    },
    {
      id: 2,
      name: "Lanches",
      subtitle:
        "Descubra uma seleção deliciosa de lanches que agradam todos os paladares. Aproveite um momento saboroso e prático!",
    },
    {
      id: 3,
      name: "Sobremesas",
      subtitle:
        "Mergulhe no mundo das sobremesas irresistíveis, onde cada doce é uma obra-prima de sabor e textura.",
    },
    {
      id: 3,
      name: "Especiarias",
      subtitle:
        "Explore o mundo aromático das especiarias que elevam qualquer prato a um novo patamar. ",
    },
  ]);

  return (
    <Container>
      <HeaderComponent />
      <Carousel>
        {categorys.map((category) => (
          <CardsComponent
            key={category.id}
            title={category.name}
            subtitle={category.subtitle}
          />
        ))}
      </Carousel>
    </Container>
  );
};
