// Import custom styling
import * as bootstrap from 'bootstrap';
import '../sass/main.scss';

// Import custom components
import './components/navbar';
import './components/storyItem';
import './components/formData'
import './components/infoDev';
import './components/socialDev'

// Import pages
import Dashboard from './pages/dashboard';
import Form from './pages/form';
import Developer from './pages/developer';

const routes = {
  '/': Dashboard,
  '/views/form.html': Form,
  '/views/developer.html': Developer,
};
 
const detectRoute = () => routes[window.location.pathname];
 
const initPages = () => {
  const navbar = document.querySelector('#navbar');
  const main = document.querySelector('main');
 
  if (navbar && main) {
    main.style.minWidth = `calc(100% - ${navbar.clientHeight}px)`;
  }
};
 
window.addEventListener('DOMContentLoaded', async () => {
  initPages();
 
  const route = detectRoute();
  route.init();
});