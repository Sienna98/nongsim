document.addEventListener('DOMContentLoaded', function () {
  const navEl = document.querySelector('.nav');
  const menuEl = document.querySelector('.main-menu');

  menuEl.addEventListener('mouseenter', function () {
    navEl.classList.add('shadow');
  });
  menuEl.addEventListener('mouseleave', function () {
    navEl.classList.remove('shadow');
  });
});


// // 스크롤 반응 헤더
// const prevScrollpos = window.pageYOffset;
// const headerEl = document.querySelector('.header');

// window.onscroll = function() {
//   // 반응형 헤더
//   let currentScrollPos = window.pageYOffset;
//   // 만약 방금 스크롤이 지금 스크롤보다 크다면 (페이지를 위로 올리는 행위라면)
//   if (prevScrollpos > currentScrollPos) {
//     headerEl.classList.add('scroll');
//   } else {
//     // 만약 방금의 스크롤이 지금 스크롤보다 작다면 (페이지를 아래로 내리는 행위라면)
//     headerEl.classList.remove('scroll');
//   }
//   prevScrollpos = currentScrollPos;
 
// }

const headerEl = document.querySelector('.header');
let lastScroll = document.documentElement.scrollTop || 0
document.addEventListener('scroll', function(){
  let scrollTop = document.documentElement.scrollTop
  if(scrollTop > lastScroll) {
    // down
    // headerEl.classList.remove('scroll');
    headerEl.style.top = "-125px"

  } else {
    //up
    // headerEl.classList.add('scroll');
    headerEl.style.top = "0";

    
  }
  lastScroll = scrollTop
})