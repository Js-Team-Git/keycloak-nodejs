var express = require('express');
var app = express();


app.get('/', function(req, res){
    res.send("Server is up!");
 });

const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());

const testController = require('./controller/test-controller.js');
app.use('/test', testController);



app.listen(4000,()=> {
    console.log("Server Running the port 4000")
});