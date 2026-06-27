---
layout: default
title: 'Apps'
title-chn: '软件库'
---

<style>
  .app-store-shell {
    max-width: 560px;
    margin: 0 auto;
    width: 100%;
  }

  .app-store-header {
    text-align: center;
    margin-bottom: 1rem;
  }

  .app-search-wrap {
    margin-bottom: 1.25rem;
  }

  .app-search {
    box-sizing: border-box;
    width: 100%;
    padding: 0.65rem 0.9rem;
    border: 1px solid var(--secondary-light);
    border-radius: 10px;
    background: var(--background-light);
    color: var(--text-color);
    font-family: inherit;
    font-size: 0.95rem;
    box-shadow: 0 1px 3px var(--shadow-color);
  }

  .app-search:focus {
    outline: 2px solid var(--secondary-color);
    border-color: var(--main-color-light);
  }

  .app-store {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .app-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--secondary-light);
    width: 100%;
  }

  .app-row:last-child {
    border-bottom: none;
  }

  .app-row[hidden] {
    display: none;
  }

  .app-no-results {
    display: none;
    text-align: center;
    color: var(--text-color);
    opacity: 0.75;
    margin: 1.5rem 0 0;
    font-size: 0.95rem;
  }

  .app-no-results.visible {
    display: block;
  }

  .app-row-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
    min-width: 0;
  }

  .app-icon {
    width: 56px;
    height: 56px;
    min-width: 56px;
    max-width: 56px;
    flex-shrink: 0;
    display: block;
    margin: 0;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 1px 4px var(--shadow-color);
  }

  .app-icon-frame {
    width: 56px;
    height: 56px;
    min-width: 56px;
    max-width: 56px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--secondary-light);
    box-shadow: 0 1px 4px var(--shadow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .app-icon-frame .app-icon-photo {
    width: 100%;
    height: 100%;
    min-width: 0;
    max-width: 100%;
    object-fit: contain;
    padding: 6px;
    box-sizing: border-box;
    border-radius: 0;
    box-shadow: none;
    background: transparent;
  }

  .app-text {
    flex: 1;
    min-width: 0;
    text-align: left;
  }

  .app-name {
    font-weight: 600;
    font-size: 1rem;
    color: var(--text-color);
    margin: 0 0 0.2rem;
    line-height: 1.3;
  }

  .app-desc {
    font-size: 0.85rem;
    color: var(--text-color);
    opacity: 0.75;
    margin: 0;
    line-height: 1.35;
    text-align: left;
  }

  .app-open {
    flex-shrink: 0;
    align-self: center;
    padding: 0.35rem 1.1rem;
    border-radius: 999px;
    background: var(--secondary-color);
    color: var(--main-color);
    font-weight: 600;
    font-size: 0.85rem;
    text-decoration: none;
    text-align: center;
    min-width: 56px;
    transition: background 0.15s ease;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      0 1px 3px var(--shadow-color);
  }

  .app-open:hover {
    background: var(--secondary-light);
  }

  .app-open:active {
    transform: translateY(1px);
  }

  @media (max-width: 500px) {
    .app-row {
      gap: 0.75rem;
    }

    .app-icon {
      width: 48px;
      height: 48px;
      min-width: 48px;
      max-width: 48px;
      border-radius: 10px;
    }

    .app-icon-frame {
      width: 48px;
      height: 48px;
      min-width: 48px;
      max-width: 48px;
      border-radius: 10px;
    }

    .app-icon-frame .app-icon-photo {
      padding: 4px;
    }

    .app-name {
      font-size: 0.95rem;
    }

    .app-desc {
      font-size: 0.8rem;
    }

    .app-open {
      padding: 0.3rem 0.85rem;
      font-size: 0.8rem;
      min-width: 48px;
    }
  }
</style>

<div class="app-store-shell">
  <div class="app-store-header">
    <h1><span class="eng">Apps</span><span class="chn">软件库</span></h1>
    <p><span class="eng">Access the popular apps at Bear Resort!</span><span class="chn">查看小熊乐园的劲爆软件！</span></p>
  </div>

  <div class="app-search-wrap">
    <input
      class="app-search"
      id="app-search"
      type="search"
      autocomplete="off"
      placeholder="Search apps…"
      data-placeholder-eng="Search apps…"
      data-placeholder-chn="搜索软件…"
    />
  </div>

  <div class="app-store" id="app-list">
  <div class="app-row">
    <div class="app-row-info">
      <span class="app-icon-frame"><img class="app-icon app-icon-photo" src="/timer/begin.gif" alt="Timer" /></span>
      <div class="app-text">
        <div class="app-name"><span class="eng">Timer</span><span class="chn">计时器</span></div>
        <p class="app-desc"><span class="eng">Ready, Set, Countdown</span><span class="chn">倒计时，启动</span></p>
      </div>
    </div>
    <a class="app-open" href="/timer/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <img class="app-icon" src="/apps/icons/opportunities.svg" alt="Opportunities" />
      <div class="app-text">
        <div class="app-name"><span class="eng">Opportunities</span><span class="chn">机会看板</span></div>
        <p class="app-desc"><span class="eng">Hackathons and tools to try</span><span class="chn">黑客松和工具推荐</span></p>
      </div>
    </div>
    <a class="app-open" href="/opportunities/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <span class="app-icon-frame"><img class="app-icon app-icon-photo" src="/turntable/img.gif" alt="Turntable" /></span>
      <div class="app-text">
        <div class="app-name"><span class="eng">Mathy's Turntable</span><span class="chn">数数的大转盘</span></div>
        <p class="app-desc"><span class="eng">Randomly determine fate</span><span class="chn">随机决定命运</span></p>
      </div>
    </div>
    <a class="app-open" href="/turntable/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <span class="app-icon-frame"><img class="app-icon app-icon-photo" src="https://raw.githubusercontent.com/RoyaleAPI/cr-api-assets/refs/heads/master/cards-150/wizard.png" alt="Clash Royale" /></span>
      <div class="app-text">
        <div class="app-name"><span class="eng">CR Random Drawer</span><span class="chn">皇室抽卡器</span></div>
        <p class="app-desc"><span class="eng">Randomly draw a card from Clash Royale</span><span class="chn">从皇室战争卡池抽卡</span></p>
      </div>
    </div>
    <a class="app-open" href="/rand_cr/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <img class="app-icon" src="/penguin_emoji/images/magnifying.svg" alt="Penguin" />
      <div class="app-text">
        <div class="app-name"><span class="eng">Penguin Emoji</span><span class="chn">企鹅表情包</span></div>
        <p class="app-desc"><span class="eng">Generate penguin emoji</span><span class="chn">生成随机企鹅表情包</span></p>
      </div>
    </div>
    <a class="app-open" href="/penguin_emoji/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <span class="app-icon-frame"><img class="app-icon app-icon-photo" src="/failure_test/no.png" alt="Failure Test" /></span>
      <div class="app-text">
        <div class="app-name"><span class="eng">Failure Test</span><span class="chn">废物测试</span></div>
        <p class="app-desc"><span class="eng">Test how failure you are</span><span class="chn">看看你有多废物</span></p>
      </div>
    </div>
    <a class="app-open" href="/failure_test/failure_test.html" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <img class="app-icon" src="/apps/icons/grade-calculator.svg" alt="Grade Calculator" />
      <div class="app-text">
        <div class="app-name"><span class="eng">Grade Calculator</span><span class="chn">成绩计算器</span></div>
        <p class="app-desc"><span class="eng">Compute grades needed to pass</span><span class="chn">算多少分可以通过</span></p>
      </div>
    </div>
    <a class="app-open" href="/grade-calculator/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <img class="app-icon" src="/apps/icons/tic-tac-toe.svg" alt="Tic-Tac-Toe" />
      <div class="app-text">
        <div class="app-name"><span class="eng">Tic-Tac-Toe</span><span class="chn">井字棋</span></div>
        <p class="app-desc"><span class="eng">Play tic-tac-toe with the computer</span><span class="chn">与电脑玩儿井字棋</span></p>
      </div>
    </div>
    <a class="app-open" href="/tic-tac-toe/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <img class="app-icon" src="/apps/icons/draw-it.svg" alt="Draw It" />
      <div class="app-text">
        <div class="app-name"><span class="eng">Draw It</span><span class="chn">画板</span></div>
        <p class="app-desc"><span class="eng">Pixel art generator</span><span class="chn">生成像素艺术</span></p>
      </div>
    </div>
    <a class="app-open" href="/canva/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <img class="app-icon" src="/apps/icons/pinyin.svg" alt="Pinyin" />
      <div class="app-text">
        <div class="app-name"><span class="eng">Pinyin</span><span class="chn">拼音</span></div>
        <p class="app-desc"><span class="eng">Add pinyin to Chinese text</span><span class="chn">给中文加拼音</span></p>
      </div>
    </div>
    <a class="app-open" href="/pinyin/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <span class="app-icon-frame"><img class="app-icon app-icon-photo" src="/chars/beary.png" alt="Bear Resort Register" /></span>
      <div class="app-text">
        <div class="app-name"><span class="eng">Bear Resort Register</span><span class="chn">小熊樂園花名册</span></div>
        <p class="app-desc"><span class="eng">Almanac of all resort members</span><span class="chn">乐园成员花名册图鉴</span></p>
      </div>
    </div>
    <a class="app-open" href="/chars/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <span class="app-icon-frame"><img class="app-icon app-icon-photo" src="/bear-rush-new/img/beary/run-1.png" alt="Bear Rush" /></span>
      <div class="app-text">
        <div class="app-name"><span class="eng">Bear Rush</span><span class="chn">小熊快跑</span></div>
        <p class="app-desc"><span class="eng">Bear rush game</span><span class="chn">小熊快跑游戏</span></p>
      </div>
    </div>
    <a class="app-open" href="/bear-rush-new/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <img class="app-icon" src="/apps/icons/lor.svg" alt="LOR Simulator" />
      <div class="app-text">
        <div class="app-name"><span class="eng">LOR Simulator</span><span class="chn">推荐信模拟器</span></div>
        <p class="app-desc"><span class="eng">Simulate a letter of recommendation</span><span class="chn">模拟推荐信</span></p>
      </div>
    </div>
    <a class="app-open" href="/rec/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <img class="app-icon" src="/apps/icons/gaokao.svg" alt="Gaokao Simulator" />
      <div class="app-text">
        <div class="app-name"><span class="eng">Gaokao Simulator</span><span class="chn">高考模拟器</span></div>
        <p class="app-desc"><span class="eng">Fake your gaokao score slip</span><span class="chn">自定义高考成绩单</span></p>
      </div>
    </div>
    <a class="app-open" href="/gaokao-sim/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>

  <div class="app-row">
    <div class="app-row-info">
      <img class="app-icon" src="/apps/icons/led-badge.svg" alt="LED Name Badge" />
      <div class="app-text">
        <div class="app-name"><span class="eng">LED Name Badge</span><span class="chn">LED 名牌</span></div>
        <p class="app-desc"><span class="eng">Create LED-style scrolling badge text</span><span class="chn">生成 LED 滚动名牌文字</span></p>
      </div>
    </div>
    <a class="app-open" href="/led/" target="_blank"><span class="eng">Open</span><span class="chn">打开</span></a>
  </div>
  </div>

  <p class="app-no-results" id="app-no-results">
    <span class="eng">No apps match your search.</span>
    <span class="chn">没有匹配的软件。</span>
  </p>
</div>

<script>
  (function () {
    const searchInput = document.getElementById('app-search');
    const rows = [...document.querySelectorAll('#app-list .app-row')];
    const noResults = document.getElementById('app-no-results');

    rows.forEach((row) => {
      const parts = [...row.querySelectorAll('.app-name .eng, .app-name .chn, .app-desc .eng, .app-desc .chn')]
        .map((el) => el.textContent.trim().toLowerCase())
        .filter(Boolean);
      row.dataset.search = parts.join(' ');
    });

    function updateSearchPlaceholder() {
      const langBtn = document.getElementById('lang');
      const isEng = !langBtn || langBtn.textContent === 'Eng';
      searchInput.placeholder = isEng
        ? searchInput.dataset.placeholderEng
        : searchInput.dataset.placeholderChn;
    }

    function filterApps() {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      rows.forEach((row) => {
        const matches = !query || row.dataset.search.includes(query);
        row.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      noResults.classList.toggle('visible', query.length > 0 && visibleCount === 0);
    }

    searchInput.addEventListener('input', filterApps);

    document.getElementById('lang')?.addEventListener('click', () => {
      setTimeout(updateSearchPlaceholder, 0);
    });

    updateSearchPlaceholder();
  })();
</script>
