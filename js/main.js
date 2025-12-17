// Katherine Cass Personal Site - Vanilla JavaScript
// Minimal, no dependencies

document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');

      // Update aria-expanded for accessibility
      const isExpanded = navLinks.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(event) {
      if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close mobile nav on escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }
});
