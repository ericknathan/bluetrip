import type { EventModel, TouristicSpotModel } from "@/models";
import { fakerPT_BR as faker } from "@faker-js/faker";
import dayjs from "dayjs";

export function generateEvent(withSpot = true): EventModel {
  const startDate = faker.date.future({ years: 1 });

  return {
    id: faker.number.int(),
    name: faker.company.name(),
    description: faker.lorem.paragraphs(),
    price: faker.number.float({ min: 0, max: 500 }),
    imageUrl: faker.image.urlLoremFlickr({ category: "event" }),
    startDate: startDate.toString(),
    endDate: dayjs(startDate).add(2, "hour").toString(),
    touristicSpot: withSpot ? generateTouristicSpot(false) : undefined,
  };
}

export function generateTouristicSpot(withEvents = true): TouristicSpotModel {
  return {
    id: faker.number.int(),
    name: faker.company.name(),
    description: faker.lorem.paragraphs(),
    averageRate: faker.number.float({ min: 3, max: 5 }),
    price: faker.number.float({ min: 0, max: 500 }),
    imageUrl: faker.image.urlLoremFlickr({ category: "ocean" }),
    address: {
      city: faker.location.city(),
      number: faker.location.buildingNumber(),
      state: faker.location.state({ abbreviated: true }),
      street: faker.location.street(),
      zipCode: faker.location.zipCode(),
      neighborhood: faker.location.city(),
    },
    category: faker.helpers.arrayElement([
      "Aquário",
      "Parque",
      "Praia",
      "Rio",
      "Oceano",
      "Costa",
    ]),
    phone: faker.phone.number(),
    events: withEvents
      ? Array.from({ length: 3 }, () => generateEvent(false))
      : [],
  };
}
