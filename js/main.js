document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
  
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('nav-active');
    });
});
