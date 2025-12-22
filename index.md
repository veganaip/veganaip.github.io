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
  {%- assign sorted_recipes = site.recipes | sort: "date" | reverse -%}
  {%- for recipe in sorted_recipes limit:6 -%}
    {%- include recipe-card.html recipe=recipe -%}
  {%- endfor -%}
</div>

<div class="view-all">
  <a href="{{ '/recipes' | relative_url }}" class="button">View All Recipes</a>
</div>