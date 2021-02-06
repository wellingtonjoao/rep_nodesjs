const express = require("express");

const app= express();

const mysql=require("mysql");

const connection=mysql.createConnection({
   host:'localhost',
   user:'wellington',
   password:'123456',
   database:'celke'
});

connection.connect(function(err){
    if(err) {
        console.error('error connecting: ' +err.stack);
        return;
    }

console.log('connected as '+connection.threadId);
});
app.get("/", function(req,res){

    res.sendFile(__dirname+"/src/index.html");
    
});
app.get("/sobre",function(req,res){
    res.sendFile(__dirname+"/src/sobre.html");
});

app.get("/blog",function(req,res){
    res.send("Pagina do blog");
});

app.get("/contato",function(req,res){
    res.send("Pagina de contato");
});
//porta do servidor web iniciado
app.listen(8080);