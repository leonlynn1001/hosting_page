/* eslint-disable no-console */
const closeBtn = document.querySelector('.close-btn');
const navItems = document.querySelector('.show-nav');
// step 2
const showPopupBtn = document.querySelector('.showPopup');
closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navItems.classList.toggle('show-navbar');
  console.log('clicked');
});

showPopupBtn.addEventListener('click', () => {
  console.log('popup');
});
// Your code here
// const closeBtn = document.querySelector('.close-btn');
// const navItems = document.querySelector('.show-nav');
// // step 2
// const showPopupBtn = document.querySelector('.showPopup');
// document.addEventListener('DOMContentLoaded', () => {
//   closeBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     navItems.classList.toggle('show-navbar');
//     console.log('clicked');
//   });

//   showPopupBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('popup');
//   });
// });
