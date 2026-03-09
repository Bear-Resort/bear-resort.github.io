---
layout: page
title: "Opportunity Details"
title-chn: "机会详情"
---

<style>
  .details-wrap {
    max-width: 920px;
    margin: 1rem auto 2rem auto;
  }

  .detail-card {
    border: 1px solid var(--secondary-light);
    background: var(--background-light);
    border-radius: 14px;
    box-shadow: 0 6px 18px rgba(16, 20, 24, 0.06);
    padding: 1rem;
    margin: 0.9rem 0;
  }

  .detail-card h2 {
    margin: 0.1rem 0 0.5rem 0;
    font-size: 1.1rem;
  }

  .detail-meta {
    margin: 0.25rem 0;
    font-size: 0.9rem;
  }

  .detail-summary {
    margin: 0.6rem 0 0.8rem 0;
    font-size: 0.92rem;
  }

  .detail-actions {
    display: flex;
    gap: 0.55rem;
    flex-wrap: wrap;
  }

  .detail-link {
    display: inline-block;
    border-radius: 999px;
    padding: 0.35rem 0.82rem;
    font-size: 0.86rem;
    text-decoration: none;
    border: 1px solid var(--secondary-light);
    background: var(--background-color);
    color: var(--main-color);
  }

  .detail-link.primary {
    background: var(--main-color);
    color: var(--background-light);
    border-color: var(--main-color-light);
  }

  .back-line {
    text-align: center;
    margin-top: 0.2rem;
  }
</style>

<div class="details-wrap">
  <p class="back-line"><a href="/opportunities/"><span class="eng">Back to Opportunities</span><span class="chn">返回机会页</span></a></p>

  {% for item in site.data.opportunities.hackathons %}
    {% assign register_url = item.register_link | default: item.link %}
    {% assign info_url = item.info_link | default: item.rules_link | default: item.link %}
    <section class="detail-card" id="{{ item.name | slugify }}">
      <h2><span class="eng">{{ item.name }}</span><span class="chn">{{ item.name_chn }}</span></h2>
      <p class="detail-meta"><strong><span class="eng">Date:</span><span class="chn">时间：</span></strong> <span class="eng">{{ item.dates }}</span><span class="chn">{{ item.dates_chn }}</span></p>
      <p class="detail-meta"><strong><span class="eng">Location:</span><span class="chn">地点：</span></strong> <span class="eng">{{ item.location }}</span><span class="chn">{{ item.location_chn }}</span></p>
      <p class="detail-summary"><strong><span class="eng">1-sentence summary:</span><span class="chn">一句话摘要：</span></strong> {{ item.summary }}</p>

      <div class="detail-actions">
        <a class="detail-link primary" href="{{ register_url }}" target="_blank" rel="noopener"><span class="eng">Register</span><span class="chn">注册</span></a>
        <a class="detail-link" href="{{ info_url }}" target="_blank" rel="noopener"><span class="eng">Info</span><span class="chn">详情</span></a>
      </div>
    </section>
  {% endfor %}
</div>
