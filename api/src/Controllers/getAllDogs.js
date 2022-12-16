const { getApiInfo } = require("./getApiInfo");
const { getDogsDb } = require("./getDogsDb");

const getAllDogs= async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDogsDb();

  const TotalDogs = apiInfo.concat(dbInfo);

  return TotalDogs;
};

module.exports = { getAllDogs };
