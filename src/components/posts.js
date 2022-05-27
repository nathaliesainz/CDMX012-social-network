import { onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js';
import { q, deletePost } from '../lib/firestore.js';

export const posts = () => {
  const divPost = document.createElement('div');
  divPost.classList = 'div-container';

  onSnapshot(q(), (querySnapshot) => {
    while (divPost.firstChild) {
      divPost.removeChild(divPost.firstChild);
    }
    querySnapshot.forEach((doc) => {
      const container = document.createElement('article');
      container.classList = 'post-div';
      const p = document.createElement('p');
      p.innerHTML = doc.data().contenido;
      const deleteImage = document.createElement('img');
      deleteImage.className = 'delete-button';
      deleteImage.setAttribute('data-id', doc.id);
      deleteImage.src = './img/delete-icon.png';

      container.append(p, deleteImage);
      divPost.appendChild(container);

      const btnsDelete = container.querySelectorAll('.delete-button');

      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deletePost(dataset.id);
        });
      });
    });
  });
  return divPost;
};
