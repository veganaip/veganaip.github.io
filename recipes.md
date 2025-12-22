---
layout: default
title: AIP Vegan Recipes
---

# AIP Vegan Recipes

<div class="recipe-grid">
  {%- assign sorted_recipes = site.recipes | sort: "date" | reverse -%}
  {%- for recipe in sorted_recipes -%}
    {%- include recipe-card.html recipe=recipe -%}
  {%- endfor -%}
</div>