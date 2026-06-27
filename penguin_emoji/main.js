class MemeScript {
  #imgs = [
    './images/lifting.svg',
    './images/dressed.svg',
    './images/magnifying.svg',
    './images/pointing.svg',
    './images/holding.svg',
    './images/reading.svg',
    './images/playing.svg',
    './images/watering.svg',
    './images/tennis.svg',
    './images/apple.svg',
    './images/glasses.svg',
    './images/chef.svg',
    './images/football.svg',
    './images/listening.svg',
    './images/drinking.svg',
    './images/organising.svg',
  ];

  #inputBox;
  #memeSection;
  #leftBtn;
  #rightBtn;
  #currIdx;

  constructor() {
    this.#inputBox = document.getElementById('input-text');
    this.#leftBtn = document.getElementById('left');
    this.#rightBtn = document.getElementById('right');
    this.#memeSection = document.getElementById('meme');
    this.#currIdx = 0;

    this.#inputBox.addEventListener('keydown', this.#handleRefresh.bind(this));
    this.#leftBtn.addEventListener('click', this.#handleLeft.bind(this));
    this.#rightBtn.addEventListener('click', this.#handleRight.bind(this));

    this.#handleRefresh();
  }

  #handleRefresh() {
    this.#memeSection.innerHTML = '';
    const imgURL = this.#imgs[this.#currIdx];
    const str = this.#inputBox.value;

    this.#memeSection.append(this.#makeImage(imgURL), ...this.#makeStrings(str));
  }

  #handleLeft() {
    this.#currIdx = (this.#currIdx - 1 + this.#imgs.length) % this.#imgs.length;
    this.#handleRefresh();
  }

  #handleRight() {
    this.#currIdx = (this.#currIdx + 1) % this.#imgs.length;
    this.#handleRefresh();
  }

  #makeImage(url) {
    const imgDiv = document.createElement('img');
    imgDiv.classList.add('meme-image');
    imgDiv.src = url;
    imgDiv.alt = 'Penguin emoji';
    imgDiv.loading = 'eager';
    return imgDiv;
  }

  #makeStrings(txt) {
    const txtDivBg = document.createElement('h2');
    txtDivBg.innerHTML = txt;
    txtDivBg.classList.add('bottom', 'background');

    const txtDiv = document.createElement('h2');
    txtDiv.innerHTML = txt;
    txtDiv.classList.add('bottom');

    return [txtDivBg, txtDiv];
  }
}

new MemeScript();
