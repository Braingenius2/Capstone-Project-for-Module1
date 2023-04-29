// Get the hamburgerIcon and nav-menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const menuItems = document.querySelector('.nav-menu');

function toggleMenu() {
  hamburgerIcon.classList.toggle('close');
  menuItems.classList.toggle('show');
}

// Add click event listeners to the hamburgerIcon
hamburgerIcon.addEventListener('click', toggleMenu);

// Add click event listeners to the menu items links
menuItems.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      // Hide the nav-menu after a link is clicked
      menuItems.classList.toggle('show');
    });
  });
