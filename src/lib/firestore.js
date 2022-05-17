import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js';
import { db } from './firebaseConfig.js';

export const createPost = (element) => {
  addDoc(collection(db, 'posts'), {
    contenido: element,
  });
};
