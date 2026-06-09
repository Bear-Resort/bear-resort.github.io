const langBtn = document.getElementById('lang');

function isEnglish() {
  return langBtn.textContent === 'Eng';
}

export function applyLanguageVisibility(root = document) {
  const showEng = isEnglish();
  root.querySelectorAll('.eng').forEach((el) => {
    el.style.display = showEng ? 'inline' : 'none';
  });
  root.querySelectorAll('.chn').forEach((el) => {
    el.style.display = showEng ? 'none' : 'inline';
  });
}

// Attempt to load the language from localStorage
const savedLang = localStorage.getItem('language');

// If a language is saved in localStorage, use it. Otherwise, default to "Eng"
if (savedLang) {
  langBtn.textContent = savedLang;
} else {
  langBtn.textContent = 'Eng'; // Default to English
}

applyLanguageVisibility();

// Event listener for language toggle
langBtn.addEventListener('click', () => {
  const newLang = langBtn.textContent === 'Eng' ? '中' : 'Eng';

  // Update button text to reflect new language
  langBtn.textContent = newLang;

  // Store the selected language in localStorage
  localStorage.setItem('language', newLang);

  applyLanguageVisibility();
});

function updateLanguage() {
  const newLang = langBtn.textContent === 'Eng' ? 'Eng' : '中';

  // Update button text to reflect new language
  langBtn.textContent = newLang;

  // Store the selected language in localStorage
  localStorage.setItem('language', newLang);

  applyLanguageVisibility();
}

export function updateMyLanguage() {
  applyLanguageVisibility();
  return isEnglish() ? 'Eng' : 'Chn';
}
