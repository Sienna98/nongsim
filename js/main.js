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