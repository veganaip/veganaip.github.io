---
layout: default
title: AIP Vegan Recipes
---

# AIP Vegan Recipes

<div class="recipe-grid">
  {%- for recipe in site.recipes -%}
    {%- include recipe-card.html recipe=recipe -%}
  {%- endfor -%}
</div>