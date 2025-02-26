#!/bin/bash

# Check if a recipe name was provided
if [ $# -eq 0 ]; then
  echo "Usage: $0 \"Recipe Name\""
  exit 1
fi

# Convert the recipe name to a filename
RECIPE_NAME="$1"
FILENAME=$(echo "$RECIPE_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
FILEPATH="_recipes/${FILENAME}.md"

# Check if the file already exists
if [ -f "$FILEPATH" ]; then
  echo "Error: Recipe file already exists at $FILEPATH"
  exit 1
fi

# Get the current date in YYYY-MM-DD format
CURRENT_DATE=$(date +%Y-%m-%d)

# Create the recipe file
cat > "$FILEPATH" << EOL
---
layout: recipe
title: "$RECIPE_NAME"
date: $CURRENT_DATE
image: /assets/images/recipes/${FILENAME}.jpg
prep_time: 
cook_time: 
servings: 
categories: []
ingredients:
  - id: 
    amount: 
    notes: 
  - id: 
    amount: 
    notes: 
  - id: 
    amount: 
    notes: 
  - id: 
    amount: 
    notes: 
  - id: 
    amount: 
    notes: 
  - id: 
    amount: 
    notes: 
tags: []
foods: []
notes: |
  
---
1. 

2. 

3. 

4. 

5. 
EOL

# Create the image prompt file
mkdir -p assets/images/recipe-prompts
PROMPT_FILEPATH="assets/images/recipe-prompts/${FILENAME}.txt"

cat > "$PROMPT_FILEPATH" << EOL
A professional food photography style image of $RECIPE_NAME. 

EOL

echo "Recipe template created at $FILEPATH"
echo "Image prompt template created at $PROMPT_FILEPATH"
echo "Don't forget to add an image at assets/images/recipes/${FILENAME}.jpg"