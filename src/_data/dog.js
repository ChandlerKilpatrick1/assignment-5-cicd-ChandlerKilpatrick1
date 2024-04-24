// const eleventyFetch = require("@11ty/eleventy-fetch");
// require('dotenv').config();


// module.exports = async function () {

//   let baseUrl = `https://dog.ceo/api/breeds/image/random`;

//   try {
//     let dogsData = await eleventyFetch(baseUrl, {
//       duration: "0s", 
//       type: "json", 
//       fetchOptions: {
//         headers: {
//           "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
//         }
//       }
//     });
//     console.log(dogsData);
//     return(dogsData);
//   } catch (err) {
//     console.error("Something went wrong with request\n" + baseUrl);
//     console.log(err);
//   }
// };