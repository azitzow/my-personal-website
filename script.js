// JS code
const button = document.querySelector('.btn');

const handleClick = function () {
  alert('Welcome to my first website');
};

const logo = document.querySelector('.logo');

logo.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);

