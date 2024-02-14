import axios from "axios";

const carsInstance = axios.create({
  baseURL: "https://65ccc885dd519126b83f8cbd.mockapi.io",
});
export const requestAllCars = async () => {
  const { data } = await carsInstance.get("/advert");
  return data;
};
