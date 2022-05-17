import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js';
import { GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCrfc9Ioed6j472Wui7J32E8UQk6OqT6w0',
  authDomain: 'instacat-e1674.firebaseapp.com',
  projectId: 'instacat-e1674',
  storageBucket: 'instacat-e1674.appspot.com',
  messagingSenderId: '375133279392',
  appId: '1:375133279392:web:2076ad8c9949e3aa1c65c5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
