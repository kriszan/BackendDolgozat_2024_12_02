import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient()
async function main() {
  prisma.$connect();
  for (let i = 0; i < 20; i++) {
    prisma.jatek.create({
      data: {
        megnevezes: faker.word.adjective(),
        anyag: faker.helpers.arrayElement(["wood", "metal", "plastic", "other"]),
        suly: faker.number.float({ min: 0, fractionDigits: 2 })
      }
    })
  }

  for (let i = 0; i < 20; i++) {
    prisma.gyerek.create({
      data: {
        nev: faker.person.fullName(),
        cim: faker.location.streetAddress({ useFullAddress: true }),
        jovolte: faker.datatype.boolean()
      }
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    //process.exit(1)
  })
