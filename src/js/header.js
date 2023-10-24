(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

	window.addEventListener('resize',() => {
		if (window.innerWidth > 768) {
	 mobileMenu.classList.remove('is-open');
 }
});

/ ---------Приховати header  ----------/ 

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.fixed-header');
  const hideHeaderButton = document.getElementById('hide-header-button');
  
  hideHeaderButton.addEventListener('click', function () {
    header.style.display = 'none'; 
    overlay.style.display = 'none';
  });
});
})();
 



