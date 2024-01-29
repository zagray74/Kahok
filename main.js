$(document).ready(function () {
  $('.slider').slick({
    dots:true,
    adaptiveHeight:true,
    
  });
})
const menuBtn = document.querySelector('.menu-btn');
const link = document.querySelector('.link');

menuBtn.addEventListener('click',()=>{
  link.classList.toggle('link--active')
});