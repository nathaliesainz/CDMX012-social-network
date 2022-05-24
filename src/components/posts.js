import { onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js';
import { q } from '../lib/firestore.js';

export const posts = () => {
  const divPost = document.createElement('div');

  onSnapshot(q(), (querySnapshot) => {
    while (divPost.firstChild) {
      divPost.removeChild(divPost.firstChild);
    }
    querySnapshot.forEach((doc) => {
      const container = document.createElement('article');
      container.classList = 'post-div';
      const p = document.createElement('p');
      p.innerHTML = doc.data().contenido;
      container.appendChild(p);
      divPost.appendChild(container);
      console.log(doc.data());
    });
  });
  return divPost;
};
