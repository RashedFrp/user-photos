importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCpcDHhLwGBZgM1rWx1sYzIRcCM7bVh0Gc",
    authDomain: "tech-alpha-57fd1.firebaseapp.com",
    projectId: "tech-alpha-57fd1",
    storageBucket: "tech-alpha-57fd1.firebasestorage.app",
    messagingSenderId: "833660060441",
    appId: "1:833660060441:web:7140fa25d63e9d6ef5fb88"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification ? payload.notification.title : 'New Message';
    const options = {
        body: payload.notification ? payload.notification.body : '',
        icon: payload.notification ? payload.notification.icon : '/favicon.ico'
    };
    self.registration.showNotification(title, options);
});
