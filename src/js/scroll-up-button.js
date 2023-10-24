const btnToUp = document.querySelector('.scroll-up');
btnToUp.addEventListener('click', () => {
   window.scrollTo(0, 0);
});

const btnScroll = document.querySelector('.scroll-up');
window.onscroll = () => {
   if (window.scrollY > 768) {
      btnScroll.classList.remove('btn-hidden');
   } else if (window.scrollY < 768) {
      btnScroll.classList.add('btn-hidden');
   }
}