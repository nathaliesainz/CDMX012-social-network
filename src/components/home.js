import { logOut } from '../lib/auth.js';
import { savePost } from '../lib/firestore.js';
import { posts } from './posts.js';

export const home = () => {
  const homeSection = document.createElement('section');
  homeSection.className = 'home-section';

  const homeMenu = document.createElement('menu');
  homeMenu.className = 'home-menu';

  const homeMain = document.createElement('main');
  homeMain.className = 'home-main';
  homeMain.appendChild(posts());

  const logoutImage = document.createElement('img');
  logoutImage.className = 'logout-image';
  logoutImage.src = './img/logout-icon.png';

  logoutImage.addEventListener('click', () => {
    logOut().then(() => {
      console.log('Good bye');
    }).catch((error) => {
      console.log('Not yet');
    });
  });

  homeSection.appendChild(homeMenu);
  homeMenu.appendChild(logoutImage);

  // const homeIcon = document.createElement('img');
  // homeIcon.className = 'home-icon';
  // imageHome.src = './img/home-icon.png';

  const postInput = document.createElement('textarea');
  postInput.className = 'post-input';
  postInput.placeholder = "What's happening?";

  const postButton = document.createElement('button');
  postButton.classList = 'post-button';
  postButton.textContent = 'Post';

  postButton.addEventListener('click', () => {
    savePost(postInput.value);
  });

  homeSection.appendChild(homeMain);
  // homeSection.appendChild(pruebaDiv);
  // homeMain.appendChild(homeIcon);
  homeMain.appendChild(postInput);
  homeMain.appendChild(postButton);
  // homeMain.appendChild(postsDiv);

  homeSection.append(homeMenu, homeMain);
  return homeSection;
};
