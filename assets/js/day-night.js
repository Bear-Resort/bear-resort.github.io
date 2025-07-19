// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('day-night');

    // Function to set the theme based on user preference
    const setTheme = (isNight) => {
        if (isNight) {
            document.body.classList.add('night-theme');
            document.body.classList.remove('day-theme');
            toggleButton.textContent = '🌜'; // Change to moon emoji
            localStorage.setItem('theme', 'night');
        } else {
            document.body.classList.remove('night-theme');
            document.body.classList.add('day-theme');
            toggleButton.textContent = '🌞'; // Change to sun emoji
            localStorage.setItem('theme', 'day');
        }
        localStorage.setItem('refresh', Date.now().toString());
    };

    // Check Local Storage for theme preference and set it
    const currentTheme = localStorage.getItem('theme');
    setTheme(currentTheme && currentTheme == 'night');

    // Toggle theme on button click and update Local Storage
    toggleButton.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        setTheme(currentTheme != 'night');
    });
});