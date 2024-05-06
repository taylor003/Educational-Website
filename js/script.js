let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onlick = () =>{
 menuBtn.classList.toggle('fa-times');
 navbar.classList.toggle('active');
}


var swiper = new Swiper(".course-slider", {
 slidesPerView: 20,
 grabCursor: true,
 loop: true,
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
 breakpoints: {
  450:{
   slidesPerView: 1,
   spacebetween: 2,
  },
  640: {
   slidesPerView: 1,
   spacebetween: 3,
  },
  768: {
   slidesPerView: 2,
   spacebetween: 4,
  },
  1024: {
   slidesPerView: 3,
   spacebetween: 5,
  },
 },
});


var swiper = new Swiper(".teachers-slider", {
 slidesPerView: 20,
 grabCursor: true,
 loop: true,
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
 breakpoints: {
  450:{
   slidesPerView: 1,
   spacebetween: 2,
  },
  640: {
   slidesPerView: 1,
   spacebetween: 3,
  },
  768: {
   slidesPerView: 2,
   spacebetween: 4,
  },
  1024: {
   slidesPerView: 3,
   spacebetween: 5,
  },
 },
});


var swiper = new Swiper(".reviews-slider", {
 slidesPerView: 20,
 grabCursor: true,
 loop: true,
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
 breakpoints: {
  450:{
   slidesPerView: 1,
   spacebetween: 2,
  },
  640: {
   slidesPerView: 1,
   spacebetween: 3,
  },
  768: {
   slidesPerView: 2,
   spacebetween: 4,
  },
  1024: {
   slidesPerView: 3,
   spacebetween: 5,
  },
 },
});
