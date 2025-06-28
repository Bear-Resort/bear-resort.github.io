const langBtn = document.getElementById('lang');
const engSpan = document.getElementById('eng');
const chnSpan = document.getElementById('chn');

// Attempt to load the language from localStorage
const savedLang = localStorage.getItem('language');

// If a language is saved in localStorage, use it. Otherwise, default to "Eng"
if (savedLang) {
langBtn.textContent = savedLang;
} else {
langBtn.textContent = 'Eng'; // Default to English
}

// Initialize visibility based on saved or default language
if (langBtn.textContent === 'Eng') {
engSpan.style.display = 'inline'; // Show the English span
chnSpan.style.display = 'none';   // Hide the Chinese span
} else {
engSpan.style.display = 'none';   // Hide the English span
chnSpan.style.display = 'inline'; // Show the Chinese span
}

// Event listener for language toggle
langBtn.addEventListener('click', () => {
const newLang = (langBtn.textContent === 'Eng') ? '中' : 'Eng';

// Update button text to reflect new language
langBtn.textContent = newLang;

// Store the selected language in localStorage
localStorage.setItem('language', newLang);

// Toggle visibility of the spans based on the selected language
if (newLang === 'Eng') {
    engSpan.style.display = 'inline'; // Show the English span
    chnSpan.style.display = 'none';   // Hide the Chinese span
} else {
    engSpan.style.display = 'none';   // Hide the English span
    chnSpan.style.display = 'inline'; // Show the Chinese span
}
});