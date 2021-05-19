// Setup empty JS object to act as endpoint for all routes
let projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
const { send } = require('process');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

//output that server is running
const port = 8000;

const server = app.listen(port, listening);
function listening(){
    console.log(`server is running on port ${port}`);
}

// Setup Server

//get
app.get('/get-latest-weather',function(request, response){
    console.log("inside get function");
    const len = Object.keys(projectData).length;
    let limit = (len <= 5) ? len : 5;
    console.log(projectData.slice(len-limit,len).reverse())
    response.json(projectData.slice(len-limit,len).reverse());
})

app.get('/get-all',function(request,response){
    response.send(projectData)
})

//post
app.post('/post-weather',function(request, response){
    newEntry = {
        location : request.body.name,
        temperature : Math.ceil(parseInt(request.body.main.temp)-273.15),
        weather : request.body.weather[0].description,
        icon: request.body.weather[0].icon,
        feelings: request.body.feelings
    }
    projectData.push(newEntry);
    console.log(projectData);
    response.send(newEntry)
})
