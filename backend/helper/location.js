const API_KEY = 'AIzaSyB8T5bPPj1sJ_TEbiio3YrzafXVVIF59Dk';
const axios = require('axios');
const HttpError = require('../model/http-error');


//geocoding transform of the address using google geocoding api

async function getLocationforAddress(address) {
   const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`);
   const data = response.data;
   if(!data || data.status === 'ZERO_RESULTS'){
     const error =  new HttpError('The input address is invalid',422);
     throw error;
   }
   const location = data.results[0].geometry.location;
   return location;
}

module.exports = getLocationforAddress;
