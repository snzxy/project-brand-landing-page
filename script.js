'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('[data-navbar]');
  const SCROLL_THRESHOLD = 40;

  function handleScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  const burgerBtn = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const overlay = document.querySelector('[data-menu-overlay]');
  const menuLinks = document.querySelectorAll('[data-menu-link]');

  function openMenu() {
    mobileMenu.classList.add('is-open');
    overlay.classList.add('is-visible');
    burgerBtn.classList.add('is-active');
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    burgerBtn.classList.remove('is-active');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  }

  burgerBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
});
