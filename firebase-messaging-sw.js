importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

var config = {
    apiKey: "AIza...Dhg",
    authDomain: "test-6..4e.firebaseapp.com",
    databaseURL: "https://t..t-6..e.fir.io.com",
    storageBucket: "t..t-6..4e.a..pot.com",
    messagingSenderId: "32...9..5"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

//If user is already has opened the page.
messaging.setBackgroundMessageHandler(function(payload){
    const title = "Hello World";
    const options = {
        body: payload.data.status
    };
    return self.registration.showNotification(title, options);
});