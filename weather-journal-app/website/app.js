/* Global Variables */

//buttons
const generate = document.querySelector('#generate');
const test = document.querySelector('#test');
//const fav = document.querySelector('#feelings').value;
const fav = {"animal" : "tiger", "fact" : "tigers are fun"};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//eventlistners for click
function addEvents(){
    generate.addEventListener('click',performAction);
    test.addEventListener('click',function(){
        console.log("Test");
    })
}

//get API

function performAction(e){
    e.preventDefault();
    const val = document.querySelector('#feelings').value;
    console.log('this is the value' + val);
    getAnimalsDemo('/get-animals')
    .then(function(data){
        console.log(data[0])
        postData('/add-animals', {animal: data[0].animal, fact: val})
    });
}

const getAnimalsDemo = async function(url){
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
const postData = async function(url ='', dataInput={}){
    const res = await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataInput)
    });

    try{
        const newData = await res.json();
        console.log("here");
        return newData;    
    }catch(error){
        console.log("error",error)
    }
}




addEvents();