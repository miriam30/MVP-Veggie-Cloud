var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'recipes'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM list', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var insertOne= function(url, name, callback){
  connection.query('INSERT INTO list (url, name) VALUES (?,?)',
  [url, name], (err, results)=>{
    if(err){
      console.log("insert error")
      callback(err, null)
    } else{
      console.log(results);
      callback(null, results)
    }
  }
)
}

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne
