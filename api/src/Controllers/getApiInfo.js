const axios = require("axios");
require("dotenv").config();
const { API_URL } = process.env;

const getApiInfo = () => {
  const apiInfo = axios.get(API_URL).then((res) =>
    res.data.map((el) => {

      return {
        id: el.id,
        Name: el.name,
        height: el.height?.metric, 
        weight: el.weight?.metric, 
        life_span: el.life_span,
        temperament: el.temperament,
        imageUrl: el.image?.url
      };
    })
  );
  return apiInfo;
};

module.exports = { getApiInfo };