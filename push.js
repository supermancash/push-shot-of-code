import push from 'web-push';

let vapidKeys = {
    publicKey:'BMJCha-2I_8Py_t9YRZ-h89NwtB88CKCvoUlEHDiN3D-Yd24RikbX7LjaxjGN9Y5qBGng55tdtwdB3TzE1_FMwQ',
    privateKey: 'lc8ydWAPqWhCkZJJPywXsn0zT9NOytAh7VNQE9E8VdM'
}

push.setVapidDetails('mailto:alexanderio.emilio@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {

};

push.sendNotification(sub, 'test message');