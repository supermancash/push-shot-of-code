self.addEventListener('push', () =>{
    let options = {

    }
    self.registration.showNotification('test message', options);
})