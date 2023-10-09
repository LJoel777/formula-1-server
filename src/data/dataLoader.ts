import fs from "fs";
import { Driver } from "./drivers";

export const loadDriversData = (): Driver[] => {
  try {
    const rawData = fs.readFileSync("src/data/drivers.json", "utf8");
    const driversData: Driver[] = JSON.parse(rawData);

    const drivers = assignPlacesAndImages(driversData);

    console.log("Drivers data loaded successfully.");
    return drivers;
  } catch (error) {
    console.error("Error loading drivers data:", error);
    return [];
  }
};

const assignPlacesAndImages = (drivers: Driver[]): Driver[] => {
  const uniquePlaces = Array.from({ length: drivers.length }, (_, index) => index + 1);
  const shuffledPlaces = shuffleArray(uniquePlaces);

  return drivers.map((driver, index) => ({
    ...driver,
    place: shuffledPlaces[index],
    imgUrl: `/static/${driver.code.toLowerCase()}.png`,
  }));
};

const shuffleArray = (array: number[]): number[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
