const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "note 5",
      brand: "vivo",
      price: 500,
      category: "mobile",
    },
    {
      name: "note 6",
      brand: "vivo",
      price: 1000,
      category: "mobile",
    },
    {
      name: "note 7",
      brand: "vivo",
      price: 1500,
      category: "mobile",
    },
  ]);

  if (result.acknowledged) {
    console.log("Data Inserted");
  }
};

insert();
