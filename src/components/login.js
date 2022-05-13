import { logInWithGoogle } from '../lib/auth.js';

export const login = () => {
  const loginSection = document.createElement('section');
  loginSection.className = 'login-section';

  const firstLoginDiv = document.createElement('div');
  firstLoginDiv.className = 'first-login-div';

  const loginImage = document.createElement('img');
  loginImage.className = 'image-login';
  loginImage.src = './img/login-image.png';

  const loginWelcome = document.createElement('h2');
  loginWelcome.className = 'login-welcome';
  loginWelcome.textContent = 'Join the paw-mmunity!';

  firstLoginDiv.appendChild(loginImage);
  firstLoginDiv.appendChild(loginWelcome);

  const secondLoginDiv = document.createElement('div');
  secondLoginDiv.className = 'second-login-div';

  const loginCard = document.createElement('div');
  loginCard.className = 'login-card';

  const loginTitle = document.createElement('h1');
  loginTitle.className = 'login-header';
  loginTitle.textContent = 'InstaCat';

  const loginSubtitle = document.createElement('h2');
  loginSubtitle.className = 'login-subtitle';
  loginSubtitle.textContent = 'Log in using a valid email';

  const loginButton = document.createElement('button');
  loginButton.className = 'login-button';
  loginButton.textContent = 'Login with Google';

  const imageLoginButton = document.createElement('img');
  imageLoginButton.className = 'image-button';
  imageLoginButton.src = './img/loginGoogle.png';

  loginButton.addEventListener('click', () => {
    logInWithGoogle().then((result) => {
      console.log(result.user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
  });

  const loginLine = document.createElement('hr');
  loginLine.className = 'login-line';

  const loginTip = document.createElement('h3');
  loginTip.className = 'login-tip';
  loginTip.textContent = 'Never share your credentials!';

  secondLoginDiv.appendChild(loginCard);
  loginCard.appendChild(loginTitle);
  loginCard.appendChild(loginSubtitle);
  loginCard.appendChild(loginButton);
  loginCard.appendChild(loginLine);
  loginCard.appendChild(loginTip);
  loginButton.appendChild(imageLoginButton);

  loginSection.append(firstLoginDiv, secondLoginDiv);
  return loginSection;
};
