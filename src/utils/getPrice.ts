import type { Car } from "../types";

export const getPrice = (car: Car): number => {
  let price = 2000;

  const year = parseInt(car.year);
  if (!isNaN(year)) {
    price += (year - 2000) * 100;
  }

  if (car.displ) {
    price += car.displ * 150;
  }

  if (car.cylinders) {
    price += car.cylinders * 50;
  }

  if (car.drive && car.drive.includes("All-Wheel")) {
    price += 500;
  }

  if (car.trany && car.trany.toLowerCase().includes("auto")) {
    price += 250;
  }

  if (car.fueltype && car.fueltype.toLowerCase().includes("electric")) {
    price += 1000;
  }

  return Math.round(price);
};
