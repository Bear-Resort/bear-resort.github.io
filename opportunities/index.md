---
layout: page
title: "Opportunities"
title-chn: "机会"
---

<style>
  .opportunities-intro {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .section-note {
    text-align: center;
    margin-top: -0.5rem;
    color: var(--main-color-light);
    font-size: 0.92rem;
  }

  .hack-grid {
    max-width: 980px;
    margin: 1.5rem auto 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
  }

  .flip-card {
    perspective: 1200px;
    min-height: 265px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    min-height: 265px;
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner,
  .flip-card:focus-within .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-face {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1rem;
    backface-visibility: hidden;
    border: 1px solid var(--secondary-light);
    box-shadow: 0 8px 22px rgba(16, 20, 24, 0.08);
    background: linear-gradient(160deg, var(--background-light) 0%, var(--background-color) 100%);
  }

  .flip-front h3 {
    margin: 0.2rem 0 0.45rem 0;
    line-height: 1.24;
    font-size: 1.04rem;
  }

  .meta-line {
    margin: 0.25rem 0;
    font-size: 0.86rem;
  }

  .source-tag,
  .format-tag {
    display: inline-block;
    margin-top: 0.45rem;
    margin-right: 0.35rem;
    padding: 0.14rem 0.54rem;
    border-radius: 999px;
    font-size: 0.74rem;
    border: 1px solid var(--secondary-light);
    color: var(--main-color);
    background: var(--background-light);
  }

  .flip-back {
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.8rem;
    background: linear-gradient(165deg, var(--secondary-light) 0%, var(--background-light) 100%);
  }

  .flip-back p {
    margin: 0;
    font-size: 0.9rem;
  }

  .visit-btn {
    display: inline-block;
    text-decoration: none;
    border-radius: 999px;
    padding: 0.48rem 0.9rem;
    font-size: 0.86rem;
    color: var(--background-light);
    background: var(--main-color);
    border: 1px solid var(--main-color-light);
  }

  .visit-btn.alt {
    background: transparent;
    color: var(--main-color);
  }

  .calendar-shell {
    max-width: 980px;
    margin: 1.2rem auto 2rem auto;
    border: 1px solid var(--secondary-light);
    border-radius: 18px;
    background: var(--background-light);
    box-shadow: 0 8px 24px rgba(16, 20, 24, 0.06);
    padding: 1rem;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.85rem;
  }

  .calendar-title {
    font-size: 1.06rem;
    font-weight: 700;
    color: var(--main-color);
  }

  .cal-nav {
    border: 1px solid var(--secondary-light);
    background: var(--background-color);
    color: var(--main-color);
    border-radius: 999px;
    padding: 0.25rem 0.6rem;
    font-size: 0.88rem;
    line-height: 1;
    cursor: pointer;
  }

  .weekday-row,
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 0.36rem;
  }

  .weekday {
    text-align: center;
    font-size: 0.72rem;
    color: var(--main-color-light);
    padding-bottom: 0.4rem;
    letter-spacing: 0.02em;
  }

  .day-cell {
    min-height: 68px;
    border: 1px solid var(--secondary-light);
    border-radius: 12px;
    background: var(--background-color);
    padding: 0.34rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
  }

  .day-cell.empty {
    cursor: default;
    opacity: 0.35;
  }

  .day-num {
    font-size: 0.86rem;
    color: var(--text-color);
  }

  .day-cell.today {
    border-color: var(--main-color-light);
    box-shadow: inset 0 0 0 1px var(--main-color-light);
  }

  .day-cell.selected {
    border-color: var(--main-color);
    box-shadow: inset 0 0 0 1px var(--main-color);
  }

  .dot-row {
    margin-top: auto;
    display: flex;
    gap: 0.2rem;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 999px;
  }

  .dot.hackathon { background: #2c91d9; }
  .dot.deadline { background: #e07a2a; }
  .dot.resort { background: #2cba72; }

  .legend {
    margin-top: 0.7rem;
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
    font-size: 0.8rem;
    color: var(--main-color-light);
  }

  .legend span {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }

  .agenda {
    margin-top: 1rem;
    border-top: 1px solid var(--secondary-light);
    padding-top: 0.8rem;
  }

  .agenda h4 {
    margin: 0 0 0.5rem 0;
    color: var(--main-color);
  }

  .agenda-item {
    display: block;
    border: 1px solid var(--secondary-light);
    border-radius: 10px;
    padding: 0.5rem 0.65rem;
    margin: 0.35rem 0;
    background: var(--background-color);
    font-size: 0.9rem;
  }

  .agenda-date {
    color: var(--main-color-light);
    font-size: 0.78rem;
  }

  .tools-grid {
    max-width: 980px;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.8rem;
  }

  .tool-card {
    border: 1px solid var(--secondary-light);
    border-radius: 12px;
    padding: 0.8rem;
    background: var(--background-light);
  }

  .tool-card h3 {
    margin: 0.15rem 0 0.45rem;
    font-size: 1rem;
  }

  .tool-card p {
    margin: 0.3rem 0;
    font-size: 0.88rem;
  }

  @media (max-width: 640px) {
    .flip-card,
    .flip-card-inner,
    .flip-face {
      min-height: 250px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .flip-card-inner {
      transition: none;
    }
  }
</style>

<div class="opportunities-intro">
  <h1><span class="eng">Opportunities</span><span class="chn">机会</span></h1>
  <p>
    <span class="eng">Hackathons worth applying to, plus tools and timeline planning for our team.</span>
    <span class="chn">黑客松机会、工具推荐与团队时间规划。</span>
  </p>
</div>

## <span class="eng">Hackathons</span><span class="chn">黑客松</span>
<p class="section-note">
  <span class="eng">Hover a card to flip. Back side has the website button.</span>
  <span class="chn">鼠标悬停卡片可翻转，背面可直接访问官网。</span>
</p>

<div class="hack-grid">
  {% for item in site.data.opportunities.hackathons %}
    <article class="flip-card" tabindex="0">
      <div class="flip-card-inner">
        <div class="flip-face flip-front">
          <h3><span class="eng">{{ item.name }}</span><span class="chn">{{ item.name_chn }}</span></h3>
          <p class="meta-line"><strong><span class="eng">Date:</span><span class="chn">时间：</span></strong> <span class="eng">{{ item.dates }}</span><span class="chn">{{ item.dates_chn }}</span></p>
          <p class="meta-line"><strong><span class="eng">Location:</span><span class="chn">地点：</span></strong> <span class="eng">{{ item.location }}</span><span class="chn">{{ item.location_chn }}</span></p>
          <p class="meta-line"><strong><span class="eng">Status:</span><span class="chn">状态：</span></strong> {{ item.status }}</p>
          <span class="format-tag"><span class="eng">{{ item.format }}</span><span class="chn">{{ item.format_chn }}</span></span>
          <span class="source-tag">{{ item.source }}</span>
        </div>
        <div class="flip-face flip-back">
          <p>{{ item.summary }}</p>
          <a class="visit-btn" href="{{ item.link }}" target="_blank" rel="noopener">
            <span class="eng">Visit website</span><span class="chn">访问官网</span>
          </a>
          {% if item.rules_link %}
            <a class="visit-btn alt" href="{{ item.rules_link }}" target="_blank" rel="noopener">
              <span class="eng">Contest rules</span><span class="chn">比赛规则</span>
            </a>
          {% endif %}
        </div>
      </div>
    </article>
  {% endfor %}
</div>

## <span class="eng">Calendar</span><span class="chn">日历</span>
<p class="section-note">
  <span class="eng">Minimal event calendar. Add/edit dates in <code>_data/opportunities.yml</code> under <code>calendar_events</code>.</span>
  <span class="chn">极简事件日历。可在 <code>_data/opportunities.yml</code> 的 <code>calendar_events</code> 中维护重要日期。</span>
</p>

<div class="calendar-shell">
  <div class="calendar-header">
    <button class="cal-nav" id="cal-prev" aria-label="Previous Month">&lsaquo;</button>
    <div id="cal-title" class="calendar-title"></div>
    <button class="cal-nav" id="cal-next" aria-label="Next Month">&rsaquo;</button>
  </div>

  <div class="weekday-row">
    <div class="weekday">Sun</div>
    <div class="weekday">Mon</div>
    <div class="weekday">Tue</div>
    <div class="weekday">Wed</div>
    <div class="weekday">Thu</div>
    <div class="weekday">Fri</div>
    <div class="weekday">Sat</div>
  </div>

  <div id="calendar-grid" class="calendar-grid"></div>

  <div class="legend">
    <span><i class="dot hackathon"></i><span class="eng">Hackathon</span><span class="chn">黑客松</span></span>
    <span><i class="dot deadline"></i><span class="eng">Deadline</span><span class="chn">截止日</span></span>
    <span><i class="dot resort"></i><span class="eng">Resort Event</span><span class="chn">Resort 活动</span></span>
  </div>

  <div class="agenda" id="agenda"></div>
</div>

## <span class="eng">Interesting Tools You Should Try</span><span class="chn">值得尝试的工具</span>
<div class="tools-grid">
  {% for item in site.data.opportunities.tools %}
    <div class="tool-card">
      <h3><span class="eng">{{ item.name }}</span><span class="chn">{{ item.name_chn }}</span></h3>
      <p><strong><span class="eng">Category:</span><span class="chn">分类：</span></strong> <span class="eng">{{ item.category }}</span><span class="chn">{{ item.category_chn }}</span></p>
      <p><strong><span class="eng">Best for:</span><span class="chn">适合：</span></strong> <span class="eng">{{ item.best_for }}</span><span class="chn">{{ item.best_for_chn }}</span></p>
      <p><strong><span class="eng">Use case:</span><span class="chn">使用场景：</span></strong> <span class="eng">{{ item.quick_use_case }}</span><span class="chn">{{ item.quick_use_case_chn }}</span></p>
      <p><a href="{{ item.link }}" target="_blank" rel="noopener"><span class="eng">Try it</span><span class="chn">去试试</span></a></p>
    </div>
  {% endfor %}
</div>

<script>
  const calendarEvents = {{ site.data.opportunities.calendar_events | jsonify }};
  const eventMap = {};
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function toIso(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, "0");
    const d = String(dateObj.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function parseDate(dateStr) {
    return new Date(`${dateStr}T00:00:00`);
  }

  function addDays(dateObj, days) {
    const result = new Date(dateObj);
    result.setDate(result.getDate() + days);
    return result;
  }

  function expandEvents() {
    calendarEvents.forEach((event) => {
      const start = parseDate(event.start_date);
      const end = event.end_date ? parseDate(event.end_date) : parseDate(event.start_date);

      for (let d = new Date(start); d <= end; d = addDays(d, 1)) {
        const key = toIso(d);
        if (!eventMap[key]) {
          eventMap[key] = [];
        }
        eventMap[key].push(event);
      }
    });
  }

  expandEvents();

  let viewDate;
  if (calendarEvents.length > 0) {
    const first = parseDate(calendarEvents[0].start_date);
    viewDate = new Date(first.getFullYear(), first.getMonth(), 1);
  } else {
    const now = new Date();
    viewDate = new Date(now.getFullYear(), now.getMonth(), 1);
  }

  let selectedIso = null;

  function getMonthRange(yr, mon) {
    const first = new Date(yr, mon, 1);
    const last = new Date(yr, mon + 1, 0);
    return { first, last };
  }

  function renderAgenda(isoDate) {
    const agenda = document.getElementById("agenda");
    const events = (eventMap[isoDate] || []).slice().sort((a, b) => a.title.localeCompare(b.title));

    let html = `<h4><span class="eng">${isoDate}</span><span class="chn">${isoDate}</span></h4>`;

    if (!events.length) {
      html += `<div class="agenda-item"><span class="eng">No events.</span><span class="chn">暂无事件。</span></div>`;
      agenda.innerHTML = html;
      return;
    }

    events.forEach((evt) => {
      html += `<div class="agenda-item">
          <div><span class="eng">${evt.title}</span><span class="chn">${evt.title_chn || evt.title}</span></div>
          <div class="agenda-date">${evt.start_date}${evt.end_date ? " -> " + evt.end_date : ""}</div>
        </div>`;
    });

    agenda.innerHTML = html;
  }

  function renderCalendar() {
    const grid = document.getElementById("calendar-grid");
    const title = document.getElementById("cal-title");
    const y = viewDate.getFullYear();
    const m = viewDate.getMonth();

    title.textContent = `${monthNames[m]} ${y}`;

    const { first, last } = getMonthRange(y, m);
    const startPad = first.getDay();
    const totalDays = last.getDate();

    grid.innerHTML = "";

    for (let i = 0; i < startPad; i += 1) {
      const empty = document.createElement("div");
      empty.className = "day-cell empty";
      grid.appendChild(empty);
    }

    const now = new Date();
    const todayIso = toIso(new Date(now.getFullYear(), now.getMonth(), now.getDate()));

    for (let d = 1; d <= totalDays; d += 1) {
      const dateObj = new Date(y, m, d);
      const iso = toIso(dateObj);
      const events = eventMap[iso] || [];

      const cell = document.createElement("button");
      cell.className = "day-cell";
      cell.type = "button";

      if (iso === todayIso) {
        cell.classList.add("today");
      }
      if (selectedIso === iso) {
        cell.classList.add("selected");
      }

      cell.innerHTML = `<span class="day-num">${d}</span><div class="dot-row"></div>`;
      const dotRow = cell.querySelector(".dot-row");

      events.slice(0, 3).forEach((evt) => {
        const dot = document.createElement("i");
        dot.className = `dot ${evt.category || "hackathon"}`;
        dotRow.appendChild(dot);
      });

      cell.addEventListener("click", () => {
        selectedIso = iso;
        renderCalendar();
        renderAgenda(iso);
      });

      grid.appendChild(cell);
    }

    if (!selectedIso) {
      const monthFirstEvent = calendarEvents
        .map((evt) => evt.start_date)
        .find((iso) => {
          const dObj = parseDate(iso);
          return dObj.getFullYear() === y && dObj.getMonth() === m;
        });
      selectedIso = monthFirstEvent || toIso(new Date(y, m, 1));
      renderAgenda(selectedIso);
      renderCalendar();
    }
  }

  document.getElementById("cal-prev").addEventListener("click", () => {
    viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
    selectedIso = null;
    renderCalendar();
  });

  document.getElementById("cal-next").addEventListener("click", () => {
    viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
    selectedIso = null;
    renderCalendar();
  });

  renderCalendar();
</script>
