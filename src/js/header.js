(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const overlayMobile = document.getElementById('overlay');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  };

  // if (isMenuOpen) {
  //   overlayMobile.style.display = 'none'; 
  // } else {
  //   overlayMobile.style.display = 'block'; 
  // }

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

	window.addEventListener('resize',() => {
		if (window.innerWidth > 768) {
	 mobileMenu.classList.remove('is-open');
  //  overlayMobile.style.display = 'none';
 }
});

/ ---------Приховати header  ----------/ 

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.fixed-header');
  const hideHeaderButton = document.getElementById('hide-header-button');
  
  hideHeaderButton.addEventListener('click', function () {
    header.style.display = 'none'; 
    // overlayMobile.style.display = 'none';
  });
});
})();
 