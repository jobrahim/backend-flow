require('dotenv').config();
const {KEY} = process.env;
const { default: axios } = require("axios");
const { urlWeather } = require("../constants/constants");
const getCity = require("../utils/getCity");
const getPublicIp = require("../utils/getPublicIp");


class CurrentService {

  constructor( ){
  }

  async find(city) {

    if(!city){
      const ip = await getPublicIp();
      city = await getCity(ip);
    }


    let urlCity = `${urlWeather}?q=${city}&appid=${KEY}`;

   const options = {
    method: 'GET',
    url: urlCity,
    };

    const { data } = await axios.request(options);


  return data;
  }


}

module.exports = CurrentService;
