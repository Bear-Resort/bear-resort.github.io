const textarea = document.querySelectorAll('textarea');

function adjustHeight() {
    textarea.forEach(ta => {
        ta.style.height = 'auto';
        ta.style.height = ta.scrollHeight + 'px';
    })
}

textarea.forEach(ta => {
    ta.addEventListener('input', adjustHeight);
    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + 'px';
})
