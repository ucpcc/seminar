---
layout: default
title: UCPC Seminar
---

{% assign batches = site.data.speakers | sort_natural: 'year' | reverse %}
{% for batch in batches %}
<section id="y{{ batch.year }}" class="year-block">
  <h1 class="year-title">{{ batch.year }}</h1>

  <div class="timeline">
    <ul>
    {% for s in batch.speakers %}
      <li>
        <img src="{{ s.photo | relative_url }}" alt="{{ s.name }}" class="card-img">
        <div>
          <div class="card-name">{{ s.name }}</div>
          <div class="card-title">{{ s.title }}</div>
          <div class="card-bio">{{ s.bio | markdownify }}</div>
          {% if s.link %}<a class="card-link" href="{{ s.link }}" target="_blank" rel="noopener">더 알아보기 ↗</a>{% endif %}
        </div>
      </li>
    {% endfor %}
    </ul>
  </div>
</section>
{% endfor %}
