# CLAUDE.md - Development Guidelines

## Build Commands
- `bundle exec jekyll serve` - Run local development server
- `bundle exec jekyll build` - Build the site
- `bundle exec jekyll build --watch` - Build and watch for changes
- `bundle exec jekyll clean` - Clean the site

## Site Structure
- Jekyll-based static site with a focus on vegan AIP recipes
- Pages are in markdown format with YAML front matter
- `_recipes/` contains recipe collection
- `_layouts/` contains page templates
- `_includes/` contains reusable components

## Style Guidelines
- Use semantic HTML5 elements
- Follow existing CSS naming conventions
- Keep recipe formatting consistent with existing templates
- Front matter should include title, layout, and date
- Images for recipes should be placed in assets/images/recipes/
- Recipe filenames should be descriptive and use hyphens (e.g., recipe-name.md)