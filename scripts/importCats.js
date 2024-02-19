import { PrismaClient } from "@prisma/client";
import { catExampleData } from "./catData.js";

const prisma = new PrismaClient();

// import data from catData
async function main() {
  for (let i = 0; i < catExampleData.length; i++) {
    await prisma.cat.create({
      data: catExampleData[i],
    });
  }

  console.log("Successfully imported all the data!");

  // const allCats = await prisma.cat.findMany();
  // print all cats data
  // console.log(allCats);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
