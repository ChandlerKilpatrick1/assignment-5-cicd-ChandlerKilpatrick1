const eleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function () {
  let apiKey = process.env.NPS_API_KEY; 
  // let baseUrl = `https://developer.nps.gov/api/v1/parks?stateCode=MA&api_key=${apiKey}`;
  let baseUrl = `https://developer.nps.gov/api/v1/parks`;

  // Dont need because I'm pulling from the MA sections?
  let requestParams = {
    // limit: 600,
    stateCode: "MA",
    api_key: apiKey
  }

  let params = new URLSearchParams(requestParams);
  let queryString = params.toString();
  // console.log(queryString);
  let requestUrl = `${baseUrl}?${queryString}`;

  try {
    let parksData = await eleventyFetch(requestUrl, {
      duration: "1d", 
      type: "json", 
      fetchOptions: {
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        }
      }
    });
    return(parksData);
  } catch (err) {
    console.error("Something went wrong with request\n" + baseUrl);
    console.log(err);
  }
};