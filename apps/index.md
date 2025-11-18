---
layout: default
title: "Apps"
title-chn: "软件库"
---

<style>
    body {
      margin: 0;
      padding: 0;
    }
    .app-container {
      max-width: 900px;
      margin: 2rem auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2rem;
    }
    .app-card {
      background: var(--background-light);
      border-radius: 14px;
      box-shadow: 0 4px 16px rgba(44, 62, 80, 0.07);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem 1rem;
      transition: box-shadow 0.22s;
      text-decoration: none;
      color: inherit;
      border: 1px solid var(--secondary-light);
    }
    .app-card:hover {
      box-shadow: 0 8px 32px rgba(44, 62, 80, 0.13);
      background-color: var(--secondary-color);
      border-color: var(--main-color-light);
    }
    .app-img {
      width: 48px;
      height: 48px;
      object-fit: contain;
      margin-bottom: 1rem;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(44,62,80,0.04);
      padding: 5px;
    }
    .app-name {
      color: var(--main-color);
      font-weight: 600;
      margin-bottom: 0.5rem;
      text-align: center;
    }
    .app-desc {
      font-size: 0.8rem;
      color: var(--text-color);
      text-align: center;
    }
    @media (max-width: 500px) {
      .container {
        gap: 1rem;
      }
      .app-card {
        padding: 1rem 0.6rem;
      }
      .app-img {
        width: 36px;
        height: 36px;
      }
    }
</style>

<div style="text-align: center">
    <h1><span class="eng">Apps</span><span class="chn">软件库</span></h1>
    <p><span class="eng">Access the popular apps at Bear Resort!</span><span class="chn">查看小熊乐园的劲爆软件！</span></p>
</div>
<div class="app-container">
<a class="app-card" href="/timer/" target="_blank">
    <img class="app-img" src="/timer/begin.gif" alt="Timer">
    <div class="app-name"><span class="eng">Timer</span><span class="chn">计时器</span></div>
    <div class="app-desc"><span class="eng">Ready, Set, Countdown</span><span class="chn">倒计时，启动</span></div>
</a>
<a class="app-card" href="/turntable/" target="_blank">
    <img class="app-img" src="/turntable/img.gif" alt="Turntable">
    <div class="app-name"><span class="eng">Mathy's Turntable</span><span class="chn">数数的大转盘</span></div>
    <div class="app-desc"><span class="eng">Randomly determine fate</span><span class="chn">随机决定命运</span></div>
</a>
<a class="app-card" href="/rand_cr/" target="_blank">
    <img class="app-img" src="https://raw.githubusercontent.com/RoyaleAPI/cr-api-assets/refs/heads/master/cards-150/wizard.png" alt="ClashRoyal">
    <div class="app-name"><span class="eng">CR Random Drawer</span><span class="chn">皇室抽卡器</span></div>
    <div class="app-desc"><span class="eng">Randomly Draw card from Clash Royale</span><span class="chn">从皇室战争卡池抽卡</span></div>
</a>
<a class="app-card" href="/penguin_emoji/" target="_blank">
    <img class="app-img" src="https://www.shutterstock.com/image-illustration/3d-render-academic-penguin-magnifying-260nw-199269422.jpg" alt="Penguin">
    <div class="app-name"><span class="eng">Penguin Emoji</span><span class="chn">企鹅表情包</span></div>
    <div class="app-desc"><span class="eng">Generate Penguin Emoji</span><span class="chn">生成随机企鹅表情包</span></div>
</a>
<a class="app-card" href="/failure_test/" target="_blank">
    <img class="app-img" src="/failure_test/no.png" alt="Failure">
    <div class="app-name"><span class="eng">Failure Test</span><span class="chn">废物测试</span></div>
    <div class="app-desc"><span class="eng">Test How Failure you are</span><span class="chn">看看你有多废物</span></div>
</a>
<a class="app-card" href="/grade-calculator/" target="_blank">
    <img class="app-img" src="/assets/img/good-grade.gif" alt="Grade">
    <div class="app-name"><span class="eng">Grade Calculator</span><span class="chn">成绩计算器</span></div>
    <div class="app-desc"><span class="eng">Compute Grades needed for Pass</span><span class="chn">算多少分可以通过</span></div>
</a>
<a class="app-card" href="/tic-tac-toe/" target="_blank">
    <img class="app-img" src="/tic-tac-toe/img.png" alt="tic-tac-toe">
    <div class="app-name"><span class="eng">Tic-Tac-Toe</span><span class="chn">井字棋</span></div>
    <div class="app-desc"><span class="eng">Play tic-tac-toe with computer</span><span class="chn">与电脑玩儿井字棋</span></div>
</a>
<a class="app-card" href="/canva/" target="_blank">
    <img class="app-img" src="/canva/draw.gif" alt="draw">
    <div class="app-name"><span class="eng">Draw It</span><span class="chn">画板</span></div>
    <div class="app-desc"><span class="eng">Pixel Art Generator</span><span class="chn">生成像素艺术</span></div>
</a>
<a class="app-card" href="/pinyin/" target="_blank">
    <img class="app-img" src="/assets/img/office.gif" alt="pinyin">
    <div class="app-name"><span class="eng">Pinyin</span><span class="chn">拼音</span></div>
    <div class="app-desc"><span class="eng">Add Pinyin to Chinese</span><span class="chn">给中文加拼音</span></div>
</a>
</div>