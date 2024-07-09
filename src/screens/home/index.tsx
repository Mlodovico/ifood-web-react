import React, { useEffect, useState } from "react";

import { Container, Carousel } from "./styles";

import { HeaderComponent } from "../../components/Header";
import { CardsComponent } from "../../components/Cards";
import { getAllCategorys } from "../../services/FoodService";

import { categoryInterface } from "../../types/foodCategoryInterface";

export const HomeScreen = () => {
  const [categorys, setCategorys] = useState<categoryInterface[] | undefined>();

  useEffect(() => {
    getCategorys();
  }, []);

  const getCategorys = async () => {
    const categorys = await getAllCategorys();
    setCategorys(categorys);
  };

  return (
    <Container>
      <HeaderComponent />
      <Carousel>
        {categorys !== undefined &&
          categorys.map((category) => (
            <CardsComponent
              title={category.name}
              subtitle={category.description}
            />
          ))}
      </Carousel>
    </Container>
  );
};
