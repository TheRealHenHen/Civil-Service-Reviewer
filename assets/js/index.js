// Example script to handle button clicks

// Select all buttons
const buttons = document.querySelectorAll('.btn');

// Dark mode functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const header = document.querySelector('header');
    const mainTitle = document.querySelector('.hero h1');
    const logoText = document.querySelector('nav a');
    const headerSubtitle = document.querySelector('.hero p');
    
    // Check for saved user preference, first in localStorage, then in system preferences
    const currentTheme = localStorage.getItem('theme') || 
        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Set initial theme
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.textContent = '☀️';
        header.style.backgroundImage = "url('assets/img/home_background_dark.jpg')";
        mainTitle.style.color = '#ffffff';
        logoText.style.color = '#ffffff';
    }

    // Toggle theme
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        darkModeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        
        // Toggle background image
        header.style.backgroundImage = newTheme === 'dark' 
            ? "url('assets/img/home_background_dark.jpg')"
            : "url('assets/img/home_background_light.jpg')";

        // Toggle title color
        mainTitle.style.color = newTheme === 'dark' ? '#ffffff' : '#333333';
        logoText.style.color = newTheme === 'dark' ? '#ffffff' : '#333333';
        headerSubtitle.style.color = newTheme === 'dark' ? '#ffffff' : '#333333';
    });
    
}

// Initialize dark mode
initDarkMode();
