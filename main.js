const registerButton = document.querySelector('.register-js');
const loginButton = document.querySelector('.login-js');
const Modal = document.querySelector('.modal');
const Home = document.querySelector('.home-js');

registerButton.addEventListener('click', () => Modal.classList.add('open'));
Home.addEventListener('click', () => Modal.classList.remove('open'));
loginButton.addEventListener('click', () => Modal.classList.add('active'));