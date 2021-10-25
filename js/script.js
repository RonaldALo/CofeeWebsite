/*
    evento de clique 
*/

let navbar = document.querySelector('.navbar');

document.querySelector('.menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}


let searchform = document.querySelector('.search-form');

document.querySelector('#search-item').onclick = () => {
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
}


let cartitem = document.querySelector('.cart-item-container');

document.querySelector('#card-item').onclick = () => {
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}