---
layout: default
title: Recipes | Vegan AIP Kitchen
---

# AIP Vegan Recipes

<div class="recipe-grid">
{% raw %}{% for recipe in site.recipes %}
    {% include recipe-card.html recipe=recipe %}
{% endfor %}{% endraw %}
</div>