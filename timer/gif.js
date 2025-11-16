const hibernate = document.getElementById('hibernate');
const thanksgiving = document.getElementById('thanksgiving');
const christmas = document.getElementById('christmas');
const quickNap = document.getElementById('quickNap');
const studyBreak = document.getElementById('studyBreak');
const milkTea = document.getElementById('milkTea');
const goonSession = document.getElementById('goonSession');

const hibernateGif = document.getElementById('hibernate-gif');
const thanksgivingGif = document.getElementById('thanksgiving-gif');
const christmasGif = document.getElementById('christmas-gif');
const quickNapGif = document.getElementById('quick-nap-gif');
const studyBreakGif = document.getElementById('study-break-gif');
const milkTeaGif = document.getElementById('milk-tea-gif');
const goonSessionGif = document.getElementById('goon-session-gif');

const buttons = [
    hibernate, thanksgiving, christmas, quickNap, studyBreak, milkTea, goonSession
]

const gifs = [
    hibernateGif, thanksgivingGif, christmasGif, quickNapGif, studyBreakGif, milkTeaGif, goonSessionGif
]

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseenter", () => {
        gifs[i].src = gifs[i].dataset.gif;
    });
    buttons[i].addEventListener("mouseleave", () => {
        gifs[i].src = gifs[i].dataset.static;
    });
    document.addEventListener("DOMContentLoaded", () => {
        gifs[i].src = gifs[i].dataset.static;
    });
}