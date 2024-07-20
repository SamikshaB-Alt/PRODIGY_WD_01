window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var homeSection = document.getElementById('home');
  var navLinks = document.querySelectorAll('.nav-link');

  if (window.scrollY > homeSection.offsetHeight) {
    navbar.style.background = '#00bfae'; // Neon blue background
  } else {
    navbar.style.background = '#0f4c75'; // Darker blue background
  }

  // Add active class to current nav link
  var fromTop = window.scrollY + navbar.offsetHeight + 10;
  navLinks.forEach(function(navLink) {
    if (!navLink.hash) return; // Skip empty hash values
    var section = document.querySelector(navLink.hash);
    if (
      section &&
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
});
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('nav-list').classList.toggle('active');
});
