import { logOut } from '../lib/auth.js';
import { savePost } from '../lib/firestore.js';
import { posts } from './posts.js';

export const home = () => {
  const homeSection = document.createElement('section');
  homeSection.className = 'home-section';

  const homeMenu = document.createElement('menu');
  homeMenu.className = 'home-menu';

  const homeHeader = document.createElement('h1');
  homeHeader.className = 'home-header';
  homeHeader.textContent = 'InstaCat';

  const homeMain = document.createElement('main');
  homeMain.className = 'home-main';

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

  const catsImage = document.createElement('img');
  catsImage.className = 'cats-image';
  catsImage.src = './img/home-image.png';

  homeSection.appendChild(homeMenu);
  homeMenu.appendChild(homeHeader);
  homeMenu.appendChild(logoutImage);

  const postInput = document.createElement('textarea');
  postInput.className = 'post-input';
  postInput.placeholder = "What's happening?";

  const postButton = document.createElement('button');
  postButton.classList = 'post-button';
  postButton.textContent = 'Post';

  postButton.addEventListener('click', () => {
    savePost(postInput.value);
  });

  homeMain.appendChild(catsImage);
  homeMain.appendChild(postInput);
  homeMain.appendChild(postButton);
  homeMain.appendChild(posts());

  homeSection.append(homeMenu, homeMain);
  return homeSection;
};
