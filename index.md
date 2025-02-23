---
layout: default
title: Vegan AIP Kitchen
---

# Welcome to Vegan AIP Kitchen

<div class="intro">
  <p>Simple, delicious vegan recipes for the AIP (Autoimmune Protocol) diet.</p>
</div>

<h2>Latest Recipes</h2>
<div class="recipe-grid">
  {%- for recipe in site.recipes limit:6 -%}
    {%- include recipe-card.html recipe=recipe -%}
  {%- endfor -%}
</div>

<div class="view-all">
  <a href="{{ '/recipes' | relative_url }}" class="button">View All Recipes</a>
</div>