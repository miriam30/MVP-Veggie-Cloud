var express = require('express');
var bodyParser = require('body-parser');
var database = require('../db/index.js')
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

//handle requests to RecipeList
app.get('/recipelist', function (req, res) {
  database.selectAll(function(err, results) {
    if(err) {
      console.log('needs fix hitting db');
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

//post requests to recipelist
app.post('/recipelist', function(req, res){
  var url = req.body.url;
  var description = req.body.description;
  if(!description){
    console.log('post request error');
    res.sendStatus(400);
  }else {
    database.insertOne(url, description, (err, results) =>{
      if(err){
        console.log('error in insertOne()');
        res.sendStatus(500)
      } else {
        res.status(200).json(results)
      }
    })
  }
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
