function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDarkMode() {
  const body = document.body;
  const toggleBtn = document.getElementById('toggle-btn');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleBtn.classList.remove('fa-sun');
    toggleBtn.classList.add('fa-moon');
  } else {
    toggleBtn.classList.remove('fa-moon');
    toggleBtn.classList.add('fa-sun');
  }
}

