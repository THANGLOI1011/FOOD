const registerButton = document.querySelector('.register-js');
const loginButton = document.querySelector('.login-js');
const Modal = document.querySelector('.modal');

const Modallogin = document.querySelector('.modal-login');
const Home = document.querySelector('.home-js');

const Homelogin = document.querySelector('.home-login-js');
const showRegister = document.querySelector('.auth-form');
const showLogin = document.querySelector('.auth-form-login');

registerButton.addEventListener('click', () => Modal.classList.add('open'));
Home.addEventListener('click', () => Modal.classList.remove('open'));
loginButton.addEventListener('click', () => Modallogin.classList.add('show'));

Homelogin.addEventListener('click', () => Modallogin.classList.remove('show'));

// image
const imgFeature = document.querySelector('.info-product-image img')
const listImg = document.querySelectorAll('.info-product-image-small-items img')

const currentIndex = 0;
function updateImageByIndex(index){
    // remove active class
    document.querySelectorAll('.info-product-image-small-items div').forEach(item=>{
        item.classList.remove('zoom');
    })
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('zoom')
    listImg.forEach((imgElement,index)=>{
        imgElement.addEventListener('click', e=>{
            updateImageByIndex(index)
        })
    })
}
updateImageByIndex(0)