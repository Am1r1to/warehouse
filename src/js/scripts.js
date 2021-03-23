var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.addEventListener('DOMContentLoaded', function () {


  // white menu

  let navigation = document.querySelector('nav');


  window.addEventListener('scroll', function () {

    let alreadyScrolled = window.pageYOffset; // Position (en cours) du scrol
    if (alreadyScrolled > navigation.clientHeight) {
      navigation.classList.add('white-nav');

    } else {
      navigation.classList.remove('white-nav');
    }
  })



  // Burgerte menu
  let burgerMenu = document.querySelector('.burger-menu');
  let burgerMenuDIV = document.querySelectorAll('.burger-menu div');
  let links= document.querySelector('.links');


burgerMenu.addEventListener('click',function(){
  links.classList.toggle('reveal');
  for(let i=0; i<burgerMenuDIV.length; i++){

    burgerMenuDIV[i].classList.toggle('active');
  }

})










})