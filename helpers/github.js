//getting gibhub api data
const axios = require('axios');
const config = require('../config.js');
const request = require('request');
//**/
const db = require('../database');

// let getReposByUsername = (/* TODO */) => {
let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // Make a request for a user with a given ID
  //
  axios.get('https://api.github.com/users/' + username + '/repos')
  .then(function (response) {
    // handle success
    // **save the response
    console.log(typeof response);
    console.log(response.data);
    for(let i = 0; i < response.data.length; i++) {
      var newRepo = new db.Repo(
        {
        id: response.data[i].id,
        name: response.data[i].name,
        html_url: response.data[i].html_url,
        description: response.data[i].description,
        forks_count: response.data[i].forks_count
      });
      //use mongoose built-in save method
      newRepo.save()
    }

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    // url: 'FILL ME IN',
    url: 'https://api.github.com/repos/' + username,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
}

module.exports.getReposByUsername = getReposByUsername;