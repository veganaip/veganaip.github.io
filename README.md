# Vegan AIP Recipe Website

This Jekyll-based static site showcases vegan, autoimmune protocol (AIP) compliant recipes.

## Adding New Recipes

1. Create a new markdown file in the `_recipes` directory (copy `recipe-template.md` as a starting point)
2. Fill in the recipe front matter and instructions
3. For ingredients with affiliate links, reference them by ID from the `_data/ingredients.yml` file

## Ingredient Management

Affiliate links for ingredients are managed in `_data/ingredients.yml`. To add a new ingredient with an affiliate link:

1. Add a new entry to `_data/ingredients.yml` following the existing format
2. In recipe files, reference the ingredient using the `id` field instead of directly including the link

## Local Development

```bash
bundle exec jekyll serve
```

Visit http://localhost:4000 to view the site.