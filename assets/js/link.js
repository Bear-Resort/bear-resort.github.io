// Open all link that is not in the navigation bar into a new page.

document.querySelectorAll('a').forEach(link => {
    if (link.closest('.topnav')) return;
    link.setAttribute('target', '_blank');
});