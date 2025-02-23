---
layout: default
title: Vegan AIP Kitchen
---

# Welcome to Vegan AIP Kitchen

<div class="recipe-grid">
  {% for recipe in site.recipes %}
    {% include recipe-card.html recipe=recipe %}
  {% endfor %}
</div>