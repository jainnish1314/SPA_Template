// Function to load content dynamically
function loadContent(url, targetId) {
  fetch(url)
      .then(response => response.text())
      .then(html => {
          document.getElementById(targetId).innerHTML = html;
      })
      .catch(error => console.log(error));
}

// Function to handle navigation
function handleNavigation(event) {
  event.preventDefault();
  const targetUrl = event.target.getAttribute('href');
  const targetId = event.target.getAttribute('data-target');
  if (targetUrl && targetId) {
      loadContent(targetUrl, targetId);
  }
}

// Add event listener to handle navigation
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
      link.addEventListener('click', handleNavigation);
  });
});
