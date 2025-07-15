const langBtn = document.getElementById('lang');

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
// Show English elements, hide Chinese elements
document.querySelectorAll('.eng').forEach(el => {
    el.style.display = 'inline';
});
document.querySelectorAll('.chn').forEach(el => {
    el.style.display = 'none';
});
} else {
// Show Chinese elements, hide English elements
document.querySelectorAll('.eng').forEach(el => {
    el.style.display = 'none';
});
document.querySelectorAll('.chn').forEach(el => {
    el.style.display = 'inline';
});
}

// Event listener for language toggle
langBtn.addEventListener('click', () => {
const newLang = (langBtn.textContent === 'Eng') ? '中' : 'Eng';

// Update button text to reflect new language
langBtn.textContent = newLang;

// Store the selected language in localStorage
localStorage.setItem('language', newLang);

// Toggle visibility of elements with the appropriate class
if (newLang === 'Eng') {
    // Show English elements, hide Chinese elements
    document.querySelectorAll('.eng').forEach(el => {
    el.style.display = 'inline';
    });
    document.querySelectorAll('.chn').forEach(el => {
    el.style.display = 'none';
    });
} else {
    // Show Chinese elements, hide English elements
    document.querySelectorAll('.eng').forEach(el => {
    el.style.display = 'none';
    });
    document.querySelectorAll('.chn').forEach(el => {
    el.style.display = 'inline';
    });
}
});

function updateLanguage() {
    const newLang = (langBtn.textContent === 'Eng') ? 'Eng' : '中';
    
    // Update button text to reflect new language
    langBtn.textContent = newLang;

    // Store the selected language in localStorage
    localStorage.setItem('language', newLang);

    // Toggle visibility of elements with the appropriate class
    const engElements = document.querySelectorAll('.eng');
    const chnElements = document.querySelectorAll('.chn');

    if (newLang === 'Eng') {
        // Show English elements, hide Chinese elements
        engElements.forEach(el => {
            el.style.display = 'inline';
        });
        chnElements.forEach(el => {
            el.style.display = 'none';
        });
    } else {
        // Show Chinese elements, hide English elements
        engElements.forEach(el => {
            el.style.display = 'none';
        });
        chnElements.forEach(el => {
            el.style.display = 'inline';
        });
    }
}

function updateMyLanguage() {
    const lang = langBtn.textContent;
    
    // Toggle visibility of elements with the appropriate class
    const engElements = document.querySelectorAll('.eng');
    const chnElements = document.querySelectorAll('.chn');

    if (lang === 'Eng') {
        // Show English elements, hide Chinese elements
        engElements.forEach(el => {
            el.style.display = 'inline';
        });
        chnElements.forEach(el => {
            el.style.display = 'none';
        });
    } else {
        // Show Chinese elements, hide English elements
        engElements.forEach(el => {
            el.style.display = 'none';
        });
        chnElements.forEach(el => {
            el.style.display = 'inline';
        });
    }
}