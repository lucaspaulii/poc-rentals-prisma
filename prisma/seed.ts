import prisma from "../src/database/database.js";

async function main() {
  await prisma.clients.createMany({
    skipDuplicates: true,
    data: [
      {
        name: "Marcos",
        email: "marcosesilva@terra.com.br",
        phone: "51932332525",
      },
      { name: "Antonia", email: "toninha@gmail.com", phone: "44999004598" },
      { name: "Joao", email: "joaozinho99@hotmail.com", phone: "11988772030" },
      { name: "Kevin", email: "kevinochris@bol.com.br", phone: "33930405060" },
    ],
  });

  await prisma.houses.createMany({
    skipDuplicates: true,
    data: [
      {
        address: "Rua das Camélias, 45",
        district: "Morumbi",
        city: "São Paulo",
        hasAc: true,
        hasPool: true,
      },
      {
        address: "Rua Eng João Nicolau, 9950",
        district: "Zona Sul",
        city: "Porto Alegre",
        hasAc: false,
        hasPool: false,
      },
      {
        address: "Rua Dev Lucas Pauli, 10",
        district: "Checkpoint",
        city: "Driven",
        hasAc: true,
        hasPool: false,
      },
      {
        address: "Rua das Camélias, 45",
        district: "Morumbi",
        city: "São Paulo",
        hasAc: true,
        hasPool: true,
      },
    ],
  });

  await prisma.rentals.createMany({
    skipDuplicates: true,
    data: [
      {
        startdate: new Date("2025-08-09"),
        enddate: new Date("2025-10-09"),
        dailyprice: 500,
        totalprice: 30500,
        ispaid: false,
        downpayment: 10000,
        houseId: 3,
        clientId: 2,
      },
      {
        startdate: new Date("2025-02-22"),
        enddate: new Date("2025-04-30"),
        dailyprice: 400,
        totalprice: 26800,
        ispaid: false,
        downpayment: 5000,
        houseId: 3,
        clientId: 1,
      },
      {
        startdate: new Date("2024-10-10"),
        enddate: new Date("2025-10-09"),
        dailyprice:300,
        totalprice: 109200,
        ispaid: false,
        downpayment: 50000,
        houseId: 1,
        clientId: 3,
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Seed completed successfully");
  })
  .catch((e) => {
    console.log(e);
    console.log("Seed went wrong");
    process.exit(1);
  })
  .finally(async () => {
    prisma.$disconnect();
  });
