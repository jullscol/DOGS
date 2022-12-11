const { getApiInfo } = require("./getApiInfo");

const getAllDogs= async () => {
  const apiInfo = await getApiInfo();
  return apiInfo;
};

module.exports = { getAllDogs };
