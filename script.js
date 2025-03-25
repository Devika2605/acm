// Countdown Timer
const countdown = () => {
  const eventDate = new Date('0000-00-00T00:00:00'); // Future event date
  const now = new Date(); // Current date
  const diff = eventDate - now; // Time difference in milliseconds

  const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // Calculate days
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
  const seconds = Math.floor((diff % (1000 * 60)) / 1000); // Calculate seconds

  // Update the HTML elements
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
};



// Update the countdown every second
setInterval(countdown, 1000);

// Apply dark mode on page load and toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const savedDarkMode = localStorage.getItem('darkMode');
  const body = document.body;
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  // Apply saved dark mode preference
  if (savedDarkMode === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ Light Mode';
  } else {
    body.classList.remove('dark-mode');
    darkModeToggle.textContent = '🌙 Dark Mode';
  }

  // Toggle dark mode and save preference
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    darkModeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';

    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });

    document.querySelectorAll('.dropdown').forEach(item => {
      item.addEventListener('mouseenter', () => {
        const menu = item.querySelector('.dropdown-menu');
        menu.style.display = 'block';
        menu.style.opacity = '0';
        setTimeout(() => {
          menu.style.opacity = '1';
          menu.style.transform = 'translateY(0)';
        }, 10);
      });

      item.addEventListener('mouseleave', () => {
        const menu = item.querySelector('.dropdown-menu');
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(10px)';
        setTimeout(() => {
          menu.style.display = 'none';
        }, 300);
      });
    });
  });
});