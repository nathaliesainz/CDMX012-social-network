import { getAuth, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';
import { provider } from './firebaseConfig.js';

const auth = getAuth();

export const logInWithGoogle = () => signInWithPopup(auth, provider);

export const logOut = () => signOut(auth);
