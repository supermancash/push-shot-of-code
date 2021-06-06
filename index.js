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
}