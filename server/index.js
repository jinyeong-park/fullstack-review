//server => router
const express = require('express');
const mongoose = require('../database')
const getGithub= require('../helpers/github.js')
const bodyParser = require('body-parser')
const Controller = require('./Controller.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('req.body', req.body);  //data = req.body
  console.log('req.body.term', req.body.term)
  getGithub.getReposByUsername(req.body.term);
  // Controller.getRepos(res, res);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  Controller.getAll(req, res);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

