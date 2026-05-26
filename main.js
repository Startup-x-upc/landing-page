// ============================================
// HEADER - scroll + mobile menu
// ============================================
const header     = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const mainNav    = document.getElementById('mainNav');
const menuClose  = document.getElementById('menuClose');

window.addEventListener('scroll', () => {
  header.classList.toggle('header--scrolled', window.scrollY > 50);
});

menuToggle.addEventListener('click', () => {
  mainNav.classList.add('header__nav--open');
  menuToggle.classList.add('header__menu-toggle--active');
});

menuClose.addEventListener('click', () => {
  mainNav.classList.remove('header__nav--open');
  menuToggle.classList.remove('header__menu-toggle--active');
});

mainNav.querySelectorAll('.header__nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('header__nav--open');
    menuToggle.classList.remove('header__menu-toggle--active');
  });
});

// ============================================
// HOW IT WORKS - tabs pasajero / conductor
// ============================================
document.querySelectorAll('.how-tabs__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.how-tabs__btn').forEach(b => b.classList.remove('how-tabs__btn--active'));
    btn.classList.add('how-tabs__btn--active');

    const tab = btn.dataset.tab;
    document.getElementById('tab-pasajero').classList.toggle('how-flow--hidden', tab !== 'pasajero');
    document.getElementById('tab-conductor').classList.toggle('how-flow--hidden', tab !== 'conductor');
  });
});
