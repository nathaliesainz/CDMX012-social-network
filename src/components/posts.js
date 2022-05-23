import { onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js';
import { q } from '../lib/firestore.js';

export const posts = () => {
  const divPost = document.createElement('div');
  onSnapshot(q, (querySnapshot) => {
    const postData = [];
    querySnapshot.forEach((doc) => {
      postData.push(doc.data().contenido);
    });
    postData.forEach((nota) => {
      divPost.append(nota);
    });
  });
  return divPost;
};
