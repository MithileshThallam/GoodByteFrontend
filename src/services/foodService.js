// services/foodService.js
import axios from "axios";

export const getAllFood = async (filter) => {
  let url = "/api/food/all";
  if (filter === "veg" || filter === "nonVeg") {
    url += `?type=${filter}`;
  }
  const response = await axios.get(url);
  return response.data;
};
