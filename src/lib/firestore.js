import {
  collection, addDoc, getDocs, query,
} from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js';
import { db } from './firebaseConfig.js';

export const savePost = (post) => {
  addDoc(collection(db, 'posts'), {
    contenido: post,
  });
};

export const getPosts = () => getDocs(collection(db, 'posts'));

export const q = query(collection(db, 'posts'));
