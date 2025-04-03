import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';
const firebaseConfig = {
  apiKey: 'AIzaSyCW5sakVoJ6eLv5nWeRlgsIRN3aG8JQ-VM',
  authDomain: 'garbhagudi-test-ad096.firebaseapp.com',
  projectId: 'garbhagudi-test-ad096',
  storageBucket: 'garbhagudi-test-ad096.firebasestorage.app',
  messagingSenderId: '1094258951345',
  appId: '1:1094258951345:web:fb84a21b75faa9f60ace90',
  measurementId: 'G-EJTJ61STHD',
};

export const app = initializeApp(firebaseConfig);

let messaging = null;

// Ensure it's only accessed in the browser
if (typeof window !== 'undefined') {
  messaging = getMessaging(app);
}

export { messaging };
