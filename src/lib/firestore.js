import {
  collection, addDoc, query, deleteDoc, doc,
} from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js';
import { db } from './firebaseConfig.js';

export const savePost = (post) => {
  addDoc(collection(db, 'posts'), {
    contenido: post,
  });
};

export const q = () => query(collection(db, 'posts'));

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
