/* Global Variables */
const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=` ;
const apiKey = `&appid=dfa4cf94775b0862d2176c4195234902&units=metric`;

//buttons
const generate = document.querySelector('#generate');
//const fav = document.querySelector('#feelings').value;
const fav = {};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 +'.'+ d.getDate()+'.'+ d.getFullYear();

//eventlistners for click
function addEvents(){
    generate.addEventListener('click',performAction);
}

//get API

function performAction(e){
    e.preventDefault();
    const feelingNotes = document.querySelector('#feelings').value;
    const zipCode = document.querySelector('#zip').value;
    getWeather(baseURL,zipCode,apiKey,feelingNotes)
    .then(weatherArray => {
        for (i = 1; i <= weatherArray.length; i++){
            document.querySelector(`#entryHolder${i} .date`).innerText = newDate + " in "+ weatherArray[i-1].location;
            document.querySelector(`#entryHolder${i} .temp`).innerText = weatherArray[i-1].temperature + " degrees Celsius";
            document.querySelector(`#entryHolder${i} .icon`).innerHTML =  `<img src=http://openweathermap.org/img/wn/${weatherArray[i-1].icon}@2x.png>`;
            document.querySelector(`#entryHolder${i} .content`).innerText ="Content: " + weatherArray[i-1].feelings;
        }
        document.querySelector('#zip').value='';
        document.querySelector('#feelings').value='';    
    })
}

const getWeather = async function(baseURL, zipcode, APIkey,feelingNotes){
    const weatherData = await fetch(baseURL+zipcode+APIkey)
    try{
        let dataJSON = await weatherData.json();
        dataJSON["feelings"] = feelingNotes;
        postData('/post-weather',dataJSON);
        return getLatest('/get-latest-weather');
    }catch(error){
        console.log("error",error)
    }
    
}

const getLatest = async function(url){
    const res = await fetch(url);
    try{
        const data = await res.json();
        //console.log(data);
        return data;
    }
    catch(error){
        console.log("error",error)
    }
}

//POSTCall
const postData = async function(url ='', dataInput={}) {
     try{
        const res = await fetch(url,{
            method: 'POST',
            credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataInput)
        });
         const newData = await res.json();
         //console.log(newData);
         return newData
     }catch(error){
         console.log("error",error)
     }
}
//update UI
const updateUI = async function(){
    await getLatest('/get-latest-weather')
    .then(weatherArray => {
        for (i = 1; i <= weatherArray.length; i++){
            document.querySelector(`#entryHolder${i} .date`).innerText = newDate + " in "+ weatherArray[i-1].location;
            document.querySelector(`#entryHolder${i} .temp`).innerText = weatherArray[i-1].temperature + " degrees Celsius";
            document.querySelector(`#entryHolder${i} .icon`).innerHTML =  `<img src=http://openweathermap.org/img/wn/${weatherArray[i-1].icon}@2x.png>`;
            document.querySelector(`#entryHolder${i} .content`).innerText ="Content: " + weatherArray[i-1].feelings;
        }
    })
}


addEvents();
updateUI();