if (!('PushManager' in window)) {
    // Push isn't supported on this browser, disable or hide UI.
    let body = document.getElementById("body");
    body.innerHTML = "Sorry Your Browser does not support push notifications"
}


addEventListener('load', async() =>{
    let sw = await navigator.serviceWorker.register('./sw.js');
    console.log(sw);
});

async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BMJCha-2I_8Py_t9YRZ-h89NwtB88CKCvoUlEHDiN3D-Yd24RikbX7LjaxjGN9Y5qBGng55tdtwdB3TzE1_FMwQ'
    });
    console.log(JSON.stringify(push));
    let endpointDiv = document.getElementById("endpoint");


    await fetch("https://aa9394429376.ngrok.io/api/subscribers", {
        method: 'POST',
        credentials: 'omit',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers':'*'
        },
        body: JSON.stringify(push)
    }).then(response => response.json())
        .then(data => {
            endpointDiv.innerHTML = "Registration Successful:)";
            console.log('Success:', data);
        })
        .catch((error) => {
            endpointDiv.innerHTML = "Registration failed :(";
            console.error('Error:', error);
        });
}




