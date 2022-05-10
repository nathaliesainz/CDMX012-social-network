import { logOut } from '../lib/auth.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  const nodoH1 = document.createElement('h1');
  const buttonRegister = document.createElement('button');

  buttonRegister.textContent = 'Cerrar sesion';
  buttonRegister.addEventListener('click', () => {
    logOut().then(() => {
      console.log('good bye');
    }).catch((error) => {
      console.log('Nel no te vaz');
    });
  });
  nodoH1.textContent = 'Welcome to my Social Network';
  homeDiv.append(nodoH1, buttonRegister);
  return homeDiv;
};
