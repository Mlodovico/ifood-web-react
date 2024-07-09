import axios from "axios";

import { foodInterface } from "../types/foodInterface";
import { categoryInterface } from "../types/foodCategoryInterface";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getAllFoods = async (): Promise<foodInterface[] | undefined> => {
  try {
    const { data } = await api.get("/foods");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategorys = async (): Promise<
  categoryInterface[] | undefined
> => {
  try {
    const { data } = await api.get("/foods");

    const formattedData = data.map((food: foodInterface) => {
      return {
        name: food.title,
        description: food.description,
      };
    });

    return formattedData;
  } catch (error) {}
};
