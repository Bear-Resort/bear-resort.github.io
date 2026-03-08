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

  .opportunities-grid {
    max-width: 960px;
    margin: 1.5rem auto 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
  }

  .opportunity-card {
    background: var(--background-light);
    border-radius: 12px;
    border: 1px solid var(--secondary-light);
    box-shadow: 0 4px 16px rgba(44, 62, 80, 0.08);
    padding: 1rem;
  }

  .opportunity-card h3 {
    margin-top: 0.2rem;
    margin-bottom: 0.6rem;
    text-align: left;
  }

  .opportunity-card p {
    margin: 0.35rem 0;
    font-size: 0.95rem;
  }

  .tag {
    display: inline-block;
    font-size: 0.8rem;
    padding: 0.12rem 0.45rem;
    margin-right: 0.4rem;
    border-radius: 999px;
    background: var(--secondary-light);
    color: var(--main-color);
  }

  .opportunity-footer {
    margin-top: 1rem;
  }

  .small-note {
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-color);
  }
</style>

<div class="opportunities-intro">
  <h1><span class="eng">Opportunities</span><span class="chn">机会</span></h1>
  <p>
    <span class="eng">A simple list of potential hackathons and useful tools for fellow bears.</span>
    <span class="chn">给小熊乐园里的小熊们准备的黑客松与实用工具清单。大多数由鼠鼠从小红书扒下。</span>
  </p>
</div>

## <span class="eng">Potential Hackathons</span><span class="chn">潜在黑客松</span>

<div class="opportunities-grid">
  {% for item in site.data.opportunities.hackathons %}
    <div class="opportunity-card">
      <h3><span class="eng">{{ item.name }}</span><span class="chn">{{ item.name_chn }}</span></h3>
      <p>
        <span class="tag"><span class="eng">{{ item.level }}</span><span class="chn">{{ item.level_chn }}</span></span>
        <span class="tag"><span class="eng">Team {{ item.team_size }}</span><span class="chn">团队 {{ item.team_size }}</span></span>
      </p>
      <p><strong><span class="eng">Theme:</span><span class="chn">主题：</span></strong> <span class="eng">{{ item.theme }}</span><span class="chn">{{ item.theme_chn }}</span></p>
      <p><strong><span class="eng">Timeline:</span><span class="chn">时间：</span></strong> <span class="eng">{{ item.timeline }}</span><span class="chn">{{ item.timeline_chn }}</span></p>
      <p><strong><span class="eng">Why join:</span><span class="chn">推荐理由：</span></strong> <span class="eng">{{ item.why_join }}</span><span class="chn">{{ item.why_join_chn }}</span></p>
      <p class="opportunity-footer"><a href="{{ item.link }}" target="_blank" rel="noopener"><span class="eng">Visit</span><span class="chn">查看</span></a></p>
    </div>
  {% endfor %}
</div>

## <span class="eng">Interesting Tools to Try</span><span class="chn">值得尝试的工具</span>

<div class="opportunities-grid">
  {% for item in site.data.opportunities.tools %}
    <div class="opportunity-card">
      <h3><span class="eng">{{ item.name }}</span><span class="chn">{{ item.name_chn }}</span></h3>
      <p><span class="tag"><span class="eng">{{ item.category }}</span><span class="chn">{{ item.category_chn }}</span></span></p>
      <p><strong><span class="eng">Best for:</span><span class="chn">适合：</span></strong> <span class="eng">{{ item.best_for }}</span><span class="chn">{{ item.best_for_chn }}</span></p>
      <p><strong><span class="eng">Use case:</span><span class="chn">使用场景：</span></strong> <span class="eng">{{ item.quick_use_case }}</span><span class="chn">{{ item.quick_use_case_chn }}</span></p>
      <p class="opportunity-footer"><a href="{{ item.link }}" target="_blank" rel="noopener"><span class="eng">Try it</span><span class="chn">去试试</span></a></p>
    </div>
  {% endfor %}
</div>

<div class="small-note">
  <p><span class="eng">Format: hardcoded data in <code>_data/opportunities.yml</code> for easy updates.</span><span class="chn">格式：机会信息硬编码在 <code>_data/opportunities.yml</code>，便于后续维护更新。</span></p>
</div>
