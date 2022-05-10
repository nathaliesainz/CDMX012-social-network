import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';
import { home } from './components/home.js';
import { login } from './components/login.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': login,
  '/home': home,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
};
const component = routes[window.location.pathname];

rootDiv.appendChild(component());

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    onNavigate('/home');
    // ...
  } else {
    onNavigate('/');
  }
});
