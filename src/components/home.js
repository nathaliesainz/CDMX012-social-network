import { logOut } from '../lib/auth.js';
import { createPost } from '../lib/firestore.js';

export const home = () => {
  const homeSection = document.createElement('section');
  homeSection.className = 'home-section';

  const homeMenu = document.createElement('menu');
  homeMenu.className = 'home-menu';

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

  const homeMain = document.createElement('main');
  homeMain.className = 'home-main';

  const homeIcon = document.createElement('img');
  homeIcon.className = 'home-icon';
  // imageHome.src = './img/home-icon.png';

  const postInput = document.createElement('textarea');
  postInput.className = 'post-input';
  postInput.setAttribute('placeholder', "What's happening?"); // placeholder

  const postButton = document.createElement('button');
  postButton.classList = 'post-button';
  postButton.textContent = 'Post';

  postButton.addEventListener('click', () => {
    console.log(createPost(postInput.value));
    // imprimir data en caja de input
  });

  homeSection.appendChild(homeMenu);
  homeMenu.appendChild(logoutImage);
  homeSection.appendChild(homeMain);
  homeMain.appendChild(homeIcon);
  homeMain.appendChild(postInput);
  homeMain.appendChild(postButton);

  homeSection.append(homeMenu, homeMain);
  return homeSection;
};
