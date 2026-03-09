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

  .today-banner {
    margin: 0.2rem 0 0.9rem 0;
    padding: 0.55rem 0.75rem;
    border: 1px solid var(--secondary-light);
    border-radius: 12px;
    background: linear-gradient(120deg, var(--background-color) 0%, var(--secondary-light) 100%);
    font-size: 0.86rem;
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
    background: linear-gradient(180deg, var(--background-light) 0%, var(--background-color) 100%);
  }

  .day-cell.selected {
    border-color: var(--main-color);
    box-shadow: inset 0 0 0 1px var(--main-color);
  }

  .marker-stack {
    margin-top: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.18rem;
  }

  .stripe {
    height: 6px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .stripe.start {
    border-radius: 999px 3px 3px 999px;
  }

  .stripe.mid {
    border-radius: 3px;
  }

  .stripe.end {
    border-radius: 3px 999px 999px 3px;
  }

  .stripe.hackathon { background: linear-gradient(90deg, #77c3ff, #2c91d9); }
  .stripe.deadline { background: linear-gradient(90deg, #f4b17a, #e07a2a); }
  .stripe.resort { background: linear-gradient(90deg, #8ce7b7, #2cba72); }

  .dot-row {
    display: flex;
    gap: 0.2rem;
    align-items: center;
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

  .legend-stripe {
    width: 16px;
    height: 6px;
    border-radius: 999px;
    display: inline-block;
  }

  .legend-stripe.hackathon {
    background: linear-gradient(90deg, #77c3ff, #2c91d9);
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

  .countdown-pill {
    display: inline-block;
    margin-top: 0.2rem;
    padding: 0.14rem 0.52rem;
    font-size: 0.74rem;
    border: 1px solid var(--secondary-light);
    border-radius: 999px;
    color: var(--main-color);
    background: var(--background-light);
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
  <span class="eng">Minimal event calendar. Multi-day events now show stripe bars, and agenda shows countdown from today.</span>
  <span class="chn">极简事件日历。跨天事件使用条纹显示，下方会显示距离今天还有多少天。</span>
</p>

<div class="calendar-shell">
  <div class="calendar-header">
    <button class="cal-nav" id="cal-prev" aria-label="Previous Month">&lsaquo;</button>
    <div id="cal-title" class="calendar-title"></div>
    <button class="cal-nav" id="cal-next" aria-label="Next Month">&rsaquo;</button>
  </div>

  <div id="today-banner" class="today-banner"></div>

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
    <span><i class="legend-stripe hackathon"></i><span class="eng">Multi-day span</span><span class="chn">跨天事件</span></span>
    <span><i class="dot hackathon"></i><span class="eng">Single-day hackathon</span><span class="chn">单日黑客松</span></span>
    <span><i class="dot deadline"></i><span class="eng">Deadline</span><span class="chn">截止日</span></span>
    <span><i class="dot resort"></i><span class="eng">Resort event</span><span class="chn">Resort 活动</span></span>
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
  const MS_PER_DAY = 24 * 60 * 60 * 1000;

  function normalizeDate(dateObj) {
    const d = new Date(dateObj);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function toIso(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, "0");
    const d = String(dateObj.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function parseDate(dateStr) {
    return normalizeDate(new Date(`${dateStr}T00:00:00`));
  }

  function addDays(dateObj, days) {
    const result = new Date(dateObj);
    result.setDate(result.getDate() + days);
    return normalizeDate(result);
  }

  function dayDiff(fromDate, toDate) {
    return Math.round((toDate.getTime() - fromDate.getTime()) / MS_PER_DAY);
  }

  function formatLongDate(dateObj) {
    return dateObj.toLocaleDateString(undefined, {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  function expandEvents() {
    calendarEvents.forEach((event) => {
      const start = parseDate(event.start_date);
      const end = event.end_date ? parseDate(event.end_date) : start;
      const isSpan = dayDiff(start, end) > 0;
      const startIso = toIso(start);
      const endIso = toIso(end);

      for (let d = new Date(start); d <= end; d = addDays(d, 1)) {
        const key = toIso(d);
        if (!eventMap[key]) {
          eventMap[key] = [];
        }

        let spanPosition = "single";
        if (isSpan) {
          if (key === startIso) {
            spanPosition = "start";
          } else if (key === endIso) {
            spanPosition = "end";
          } else {
            spanPosition = "mid";
          }
        }

        eventMap[key].push({
          ...event,
          isSpan,
          spanPosition,
          category: event.category || "hackathon"
        });
      }
    });
  }

  function getTodayDate() {
    return normalizeDate(new Date());
  }

  function relativeTextForEvent(event, todayDate) {
    const start = parseDate(event.start_date);
    const end = event.end_date ? parseDate(event.end_date) : start;
    const toStart = dayDiff(todayDate, start);
    const toEnd = dayDiff(todayDate, end);

    if (toStart > 0) {
      return `In ${toStart} day${toStart === 1 ? "" : "s"}`;
    }
    if (toStart === 0) {
      return "Starts today";
    }
    if (toEnd >= 0) {
      return "Happening now";
    }

    const endedAgo = Math.abs(toEnd);
    return `Ended ${endedAgo} day${endedAgo === 1 ? "" : "s"} ago`;
  }

  function getNextOrCurrentEvent(todayDate) {
    const candidates = calendarEvents
      .map((event) => {
        const start = parseDate(event.start_date);
        const end = event.end_date ? parseDate(event.end_date) : start;
        return { ...event, _start: start, _end: end };
      })
      .filter((event) => dayDiff(todayDate, event._end) >= 0)
      .sort((a, b) => a._start - b._start);

    return candidates[0] || null;
  }

  function renderTodayBanner(todayDate) {
    const banner = document.getElementById("today-banner");
    const todayLabel = formatLongDate(todayDate);
    const nextEvent = getNextOrCurrentEvent(todayDate);

    if (!nextEvent) {
      banner.innerHTML = `<strong>Today:</strong> ${todayLabel}`;
      return;
    }

    const relative = relativeTextForEvent(nextEvent, todayDate);
    banner.innerHTML = `<strong>Today:</strong> ${todayLabel} &nbsp;|&nbsp; <strong>Next:</strong> ${nextEvent.title} (${relative})`;
  }

  function findFirstEventInMonth(year, month) {
    const first = calendarEvents
      .map((event) => parseDate(event.start_date))
      .filter((dateObj) => dateObj.getFullYear() === year && dateObj.getMonth() === month)
      .sort((a, b) => a - b)[0];

    return first ? toIso(first) : null;
  }

  function pickDefaultSelectionForMonth(year, month, todayDate) {
    if (todayDate.getFullYear() === year && todayDate.getMonth() === month) {
      return toIso(todayDate);
    }

    return findFirstEventInMonth(year, month) || toIso(new Date(year, month, 1));
  }

  function renderAgenda(isoDate, todayDate) {
    const agenda = document.getElementById("agenda");
    const events = (eventMap[isoDate] || []).slice().sort((a, b) => a.title.localeCompare(b.title));
    const headingDate = formatLongDate(parseDate(isoDate));

    let html = `<h4>${headingDate}</h4>`;

    if (!events.length) {
      html += `<div class="agenda-item"><span class="eng">No events.</span><span class="chn">暂无事件。</span></div>`;
      agenda.innerHTML = html;
      return;
    }

    events.forEach((event) => {
      html += `<div class="agenda-item">
          <div><span class="eng">${event.title}</span><span class="chn">${event.title_chn || event.title}</span></div>
          <div class="agenda-date">${event.start_date}${event.end_date ? " -> " + event.end_date : ""}</div>
          <div class="countdown-pill">${relativeTextForEvent(event, todayDate)}</div>
        </div>`;
    });

    agenda.innerHTML = html;
  }

  function getMonthRange(year, month) {
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    return { first, last };
  }

  expandEvents();

  const todayDate = getTodayDate();
  const firstCalendarDate = calendarEvents.length > 0
    ? parseDate(calendarEvents[0].start_date)
    : todayDate;

  let viewDate = new Date(firstCalendarDate.getFullYear(), firstCalendarDate.getMonth(), 1);
  let selectedIso = null;

  function renderCalendar() {
    const grid = document.getElementById("calendar-grid");
    const title = document.getElementById("cal-title");
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    title.textContent = `${monthNames[month]} ${year}`;

    if (!selectedIso) {
      selectedIso = pickDefaultSelectionForMonth(year, month, todayDate);
    }

    const { first, last } = getMonthRange(year, month);
    const startPad = first.getDay();
    const totalDays = last.getDate();

    grid.innerHTML = "";

    for (let i = 0; i < startPad; i += 1) {
      const empty = document.createElement("div");
      empty.className = "day-cell empty";
      grid.appendChild(empty);
    }

    const todayIso = toIso(todayDate);

    for (let day = 1; day <= totalDays; day += 1) {
      const dateObj = new Date(year, month, day);
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

      cell.innerHTML = `<span class="day-num">${day}</span><div class="marker-stack"></div>`;
      const markerStack = cell.querySelector(".marker-stack");

      const spanEvents = events.filter((event) => event.isSpan).slice(0, 2);
      spanEvents.forEach((event) => {
        const stripe = document.createElement("i");
        stripe.className = `stripe ${event.category} ${event.spanPosition}`;
        stripe.title = event.title;
        markerStack.appendChild(stripe);
      });

      const singleEvents = events.filter((event) => !event.isSpan).slice(0, 3);
      if (singleEvents.length > 0) {
        const dotRow = document.createElement("div");
        dotRow.className = "dot-row";
        singleEvents.forEach((event) => {
          const dot = document.createElement("i");
          dot.className = `dot ${event.category}`;
          dot.title = event.title;
          dotRow.appendChild(dot);
        });
        markerStack.appendChild(dotRow);
      }

      cell.addEventListener("click", () => {
        selectedIso = iso;
        renderCalendar();
      });

      grid.appendChild(cell);
    }

    renderAgenda(selectedIso, todayDate);
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

  renderTodayBanner(todayDate);
  renderCalendar();
</script>
