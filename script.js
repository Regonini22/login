const embrulho = document.querySelector('.embrulho');
const loginlink = document.querySelector('.login-link');
const registrarlink = document.querySelector('.registrar-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registrarlink.addEventListener('click',()=> {
    embrulho.classList.add('active');
});

loginlink.addEventListener('click',()=> {
    embrulho.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    embrulho.classList.add('active-popup');
});

iconClose.addEventListener('click',()=> {
    embrulho.classList.remove('active-popup');
});