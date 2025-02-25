const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "E-Com";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db1 = result.db(database);
  return db1.collection("products");
}

module.exports = dbConnect;
