var config = {
    apiKey: "AI..hg",
    authDomain: "tes..app.com",
    databaseURL: "htt..aseio.com",
    storageBucket: "...com",
    messagingSenderId: "32..295"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.requestPermission()
    .then(function () {
        console.log("Permission Granted");
        return messaging.getToken();
    })
    .then(function (token) {
        console.log(token);
    })
    .catch(function (error) {
        console.log("Yikes! No Permission", error);
    })

//If user is already has opened the page.
messaging.onMessage(function(payload){
    console.log('Witin Page: ', payload);
});