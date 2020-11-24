import { createConnection } from 'mysql';
import express from 'express';

var connection = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'marioquiz'
});

connection.connect(function(err) {
    if (!!error) {
      console.error('error connecting: ' + err.stack);
      
      
    }else{
        console.log("Connected...");
    }
  
  });

  app.get('/', function(req,res){
    // cenas do sql
    connection.query("SELECT * FROM user", function(error,rows,fields){
    if(!!error){
        console.log('error in the query');
    }else{
        console.log("Successful query ");
    }
    });
});
  

  app.listen(1337);