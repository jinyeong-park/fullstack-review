//database => index.js (models)
const mongoose = require('mongoose');
var myDB = 'mongodb://localhost/fetcher';

mongoose.connect(myDB);

//import db in server too
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected!')
});


//repoSchema  --mongo : storing doc
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  //repos = [ {}, {}, {} ...]
  //id, name, description
  // _id,
  id: Number,
  name: String,
  html_url: String,
  description: String,
  forks_count: Number
  // fork
});
//model: class with which we construct documents
let Repo = mongoose.model('Repo', repoSchema);


//save: when you save github data in the database and
// it does somthing else (callback)
let save = (githubData, next) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  //make new instance of model , made of githubdata
  var newRepo = new Repo(githubData);
  newRepo.save(function (err){
    if (err) {
      console.log('err:', err)
    } else {
      next();
    }
  })
}

let find = (query, next) => {
  Repo.find(query, (err, result) => {
    if (err) {
      console.log('err:', err)
    }
    else {
      next(result);
    }
  })
}

//find({username: jinyeong-park}, (data) => console.log(data))    //select *

module.exports.Repo = Repo;
module.exports.save = save;
module.exports.find = find;