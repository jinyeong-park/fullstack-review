//controller

const Model = require('./Models.js')

//get request to model
function getAll(req, res){
  //data: model이 db에서 가져온 데이터
  Model.getAll( (err, data) => {
    if (err) {
      console.log(err)
    } else {
      //send data to client
      res.send(data)
    }
  })
}

// module.exports  = {getAll}
module.exports.getAll = getAll;