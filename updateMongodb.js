const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateMany(
    { name: "note 6" },
    { $set: { name: "note 5", price: 15000 } }
  );
  console.warn(result);
};

updateData();

module.exports = updateData;
