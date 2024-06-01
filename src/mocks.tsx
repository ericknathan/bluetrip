import type { EventModel, TouristicSpotModel } from "@/models";
import { fakerPT_BR as faker } from "@faker-js/faker";

export function generateEvent(withSpot = true): EventModel {
  return {
    id: faker.number.int(),
    name: faker.company.name(),
    description: faker.company.catchPhraseDescriptor(),
    price: faker.number.float({ min: 0, max: 500 }),
    imageUrl: faker.image.url(),
    startDate: faker.date.recent().toString(),
    endDate: faker.date.recent().toString(),
    touristicSpot: withSpot ? generateTouristicSpot(false) : undefined,
  };
}

export function generateTouristicSpot(withEvents = true): TouristicSpotModel {
  return {
    id: faker.number.int(),
    name: faker.company.name(),
    description: faker.company.catchPhraseDescriptor(),
    averageRate: faker.number.float({ min: 0, max: 5 }),
    price: faker.number.float({ min: 0, max: 500 }),
    imageUrl: faker.image.urlLoremFlickr({ category: "ocean" }),
    address: {
      city: faker.location.city(),
      number: faker.location.buildingNumber(),
      state: faker.location.state(),
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