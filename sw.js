self.addEventListener('push', () =>{
    let options = {

    }
    self.registration.sendNotification('test message', options);
})