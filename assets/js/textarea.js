const textarea = document.getElementById('textarea');

function adjustHeight() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

// Event listener
if (textarea) {
    textarea.addEventListener('input', adjustHeight);
    adjustHeight();
}