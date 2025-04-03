importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCW5sakVoJ6eLv5nWeRlgsIRN3aG8JQ-VM',
  authDomain: 'garbhagudi-test-ad096.firebaseapp.com',
  projectId: 'garbhagudi-test-ad096',
  storageBucket: 'garbhagudi-test-ad096.appspot.com',
  messagingSenderId: '1094258951345',
  appId: '1:1094258951345:web:fb84a21b75faa9f60ace90',
  measurementId: 'G-EJTJ61STHD',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);
  const link = payload.fcnOptions?.link || payload.data?.link;
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png',
    data: { url: link },
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
