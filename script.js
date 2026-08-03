/* =========================================================
   GENUVALY — NAVBAR SCRIPT
   Dua tanggung jawab saja di file ini (Single Responsibility):
   1. Mengubah navbar jadi solid saat user scroll ke bawah
   2. Membuka/menutup drawer menu di mobile
========================================================= */

// 'use strict' membantu menangkap kesalahan umum JS lebih awal
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------
     1. NAVBAR SCROLL EFFECT
  ----------------------------------------- */
  const navbar = document.querySelector('[data-navbar]');
  const SCROLL_THRESHOLD = 40; // px, jarak scroll sebelum navbar berubah solid

  function handleScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }

  // Jalankan sekali saat load, untuk jaga-jaga kalau halaman di-reload dalam posisi scroll
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });


  /* -----------------------------------------
     2. MOBILE DRAWER MENU
  ----------------------------------------- */
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

  // Tutup menu otomatis saat salah satu link diklik (UX: user tidak perlu 2x tap)
  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Tutup menu dengan tombol Escape (aksesibilitas keyboard)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

});
