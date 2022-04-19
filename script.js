// JS code
// document.addEventListener('DOMContentLoaded', function () {
//   const button = document.getElementsByClassName('btn');

//   const handleClick = function () {
//     alert('Welcome to my first website');
//   };

//   const logo = document.querySelector('.logo');

//   logo.addEventListener('click', handleClick);
// });
const button = document.querySelector('.btn');

const handleClick = function (bob) {
  console.log(bob);
  alert('Welcome to my first website');
};

const logo = document.querySelector('.logo');

logo.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);

