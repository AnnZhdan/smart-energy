import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

(() => {
  const overlayMobile = document.getElementById('overlay');

  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuButton = document.querySelector('.js-close-menu');

  let isMenuOpen = false; 

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen; 
    openMenuBtn.setAttribute('aria-expanded', isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (isMenuOpen) {
      disableBodyScroll(document.body);
      overlayMobile.style.display = 'block';
       
    } else {
      enableBodyScroll(document.body);
      overlayMobile.style.display = 'none'; 
     
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuButton.addEventListener('click', toggleMenu);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen) {
      mobileMenu.classList.remove('is-open');
      enableBodyScroll(document.body);
      overlayMobile.style.display = 'none'
    }
  });

 })();
