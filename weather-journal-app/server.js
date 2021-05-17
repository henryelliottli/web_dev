// Setup empty JS object to act as endpoint for all routes
let projectData = [{
    animal : "lion",
    fact : "lions are fun"
}
]

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
app.get('/get-animals',function(request, response){
    response.send(projectData);
})

//post
app.post('/add-animals',function(request, response){
    console.log("this is the");
    projectData.push(request.body);
    console.log(projectData);
})
