#i!/usr/bin/node

// Import the 'request' library
const request = require('request');

// Define constant with the base URL of the Star Wars api
const API_URL = 'https://swapi-api.alx-tools.com/api';

// Is the number of command line arguments is greater than 2
if (process.argv.length > 2) {
  // Request to the film resource for the specified film ID
  request(`${API_URL}/films/${process.argv[2]}/`, (err, _, body) => {
    // Log the error, if an error occurred during the request
    if (err) {
      console.log(err);
    }
    // GET the characters URL from the film's response body
    const charactersURL = JSON.parse(body).characters;

    // Create an array of Promises that resolve with the names of the characters
    const charactersName = charactersURL.map(
      url => new Promise((resolve, reject) => {
        // Request to the character resource
        request(url, (promiseErr, __, charactersReqBody) => {
          // Reject the Promise with the error, If an error occurred during the request
          if (promiseErr) {
            reject(promiseErr);
          }
          // Resolve the Promise with the name of the character
          resolve(JSON.parse(charactersReqBody).name);
        });
      }));

    // Wait for all Promises to resolve and log the names of the characters, separated by new lines
    Promise.all(charactersName)
      .then(names => console.log(names.join('\n')))
      .catch(allErr => console.log(allErr));
  });
}
