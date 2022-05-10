import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js';
import { GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCrfc9Ioed6j472Wui7J32E8UQk6OqT6w0',
  authDomain: 'instacat-e1674.firebaseapp.com',
  projectId: 'instacat-e1674',
  storageBucket: 'instacat-e1674.appspot.com',
  messagingSenderId: '375133279392',
  appId: '1:375133279392:web:2076ad8c9949e3aa1c65c5',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
