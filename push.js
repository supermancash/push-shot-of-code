let push = require('web-push');
const fetch = require("node-fetch");
const {response} = require("express");


let vapidKeys = {
    publicKey: 'BMJCha-2I_8Py_t9YRZ-h89NwtB88CKCvoUlEHDiN3D-Yd24RikbX7LjaxjGN9Y5qBGng55tdtwdB3TzE1_FMwQ',
    privateKey: 'lc8ydWAPqWhCkZJJPywXsn0zT9NOytAh7VNQE9E8VdM'
}

push.setVapidDetails('mailto:alexanderio.emilio@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

getSubs()

async function getSubs(){
    await fetch("https://aa9394429376.ngrok.io/api/subscribers", {
        method: 'GET',
        credentials: 'omit',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*'
        }
    }).then(response => response.json())
        .then(data => sendNotificationsToAll(data))
        .catch((error) => {
        console.error('Error:', error);
    });
}

function sendNotificationsToAll (subscriptions){
    let options = {
        title: 'Click for eternal wisdom',
        body: 'Learn the ancient secrets to life',
        url: 'https://www.youtube.com/watch?v=nADTbWQof7Y&ab_channel=JoshTurnerJoshTurnerOffiziellerK%C3%BCnstlerkanal&t=19'
    }
    for(let i = 0; i<subscriptions.length; i++){
        push.sendNotification(subscriptions[i], JSON.stringify(options));
    }
}