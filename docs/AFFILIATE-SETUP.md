# Amazon Affiliate Link Setup Guide

This guide explains how to set up Amazon Associates affiliate links for the VeganAIP site.

## Step 1: Join Amazon Associates

1. Go to [Amazon Associates](https://affiliate-program.amazon.com/)
2. Click "Sign Up"
3. Log in with your Amazon account (or create one)
4. Complete the application:
   - Enter your website: `https://veganaip.com`
   - Describe your site: "Vegan AIP recipe website providing recipes and ingredient guidance for people following both vegan and autoimmune protocol diets"
   - Select relevant categories (Cooking, Health, etc.)
5. Wait for approval (usually 24-72 hours)

**Note:** Amazon requires you to make qualifying sales within 180 days of approval, or they may close your account.

## Step 2: Find Your Associate/Tracking ID

Once approved:
1. Log into Amazon Associates
2. Your tracking ID appears in the top right (format: `yourname-20`)
3. You'll use this ID to create affiliate links

## Step 3: Ingredients Needing Affiliate Links

The ingredients file is located at:
```
_data/ingredients.yml
```

**Ingredients currently marked for affiliate links** (search for `REPLACE_WITH_AMAZON_AFFILIATE_LINK`):

| Ingredient | Description |
|------------|-------------|
| `coconut_milk_full_fat` | Full-fat canned coconut milk |
| `tigernut_oil` | Tigernut oil for cooking |
| `cassava_flour` | Cassava flour (Otto's is popular) |
| `tigernut_flour` | Tigernut flour |
| `coconut_flour` | Coconut flour |
| `coconut_aminos` | Soy sauce substitute |
| `arrowroot_powder` | Thickening agent |
| `nutritional_yeast` | Adds cheesy flavor |
| `jackfruit_young` | Canned young green jackfruit |
| `palm_hearts` | Hearts of palm |
| `avocado_oil` | High-heat cooking oil |
| `manioc_starch` | Tapioca starch |
| `dried_lavender` | Culinary lavender |
| `pomegranate_molasses` | Specialty ingredient |
| `tigernuts` | Whole or sliced tigernuts |
| `hearts_of_palm` | Canned hearts of palm |

## Step 4: Create Affiliate Links

For each ingredient:

### Method A: SiteStripe (Easiest)
1. Log into Amazon Associates
2. Go to Amazon.com and search for the product
3. Find a quality product you'd recommend
4. Use the SiteStripe toolbar at the top of the page
5. Click "Text" to get a short link
6. Copy the link (format: `https://amzn.to/XXXXXXX`)

### Method B: Product Links Tool
1. Log into Amazon Associates Central
2. Go to Product Linking → Product Links
3. Search for the product
4. Click "Get Link"
5. Choose "Short Link" format
6. Copy the link

## Step 5: Update ingredients.yml

Open `_data/ingredients.yml` and replace the placeholder with your affiliate link:

**Before:**
```yaml
cassava_flour:
  name: "cassava flour"
  link: "REPLACE_WITH_AMAZON_AFFILIATE_LINK"
  notes: "AIP-compliant flour substitute"
```

**After:**
```yaml
cassava_flour:
  name: "cassava flour"
  link: "https://amzn.to/3ABC123"
  notes: "AIP-compliant flour substitute"
```

## Step 6: Recommended Products

When selecting products to link, consider:

- **Quality:** Choose products with good reviews (4+ stars)
- **AIP compliance:** Verify ingredients are truly AIP-compliant
- **Availability:** Choose products that are consistently in stock
- **Prime eligible:** Preferred by most shoppers

### Suggested Brands by Ingredient

| Ingredient | Recommended Brands |
|------------|-------------------|
| Cassava flour | Otto's Naturals, Anthony's |
| Tigernut flour | Organic Gemini, Anthony's |
| Coconut flour | Bob's Red Mill, Anthony's |
| Coconut aminos | Coconut Secret, Big Tree Farms |
| Arrowroot powder | Bob's Red Mill, Anthony's |
| Avocado oil | Chosen Foods, Primal Kitchen |
| Coconut milk | Native Forest, Thai Kitchen (full fat) |
| Tigernuts | Organic Gemini |

## Step 7: Test Your Links

After updating:
1. Run `bundle exec jekyll serve`
2. Navigate to a recipe that uses the ingredient
3. Click the ingredient link
4. Verify it goes to the correct Amazon product
5. Check that your tracking ID appears in the URL

## File Locations Summary

| File | Purpose |
|------|---------|
| `_data/ingredients.yml` | Ingredient definitions with affiliate links |
| `_layouts/recipe.html` | Template that renders ingredient links |
| `TERMS.md` | Affiliate disclosure (already updated) |

## Quick Command to Find All Placeholders

```bash
grep -n "REPLACE_WITH_AMAZON_AFFILIATE_LINK" _data/ingredients.yml
```

## Compliance Reminders

1. **FTC Disclosure:** Already added to `TERMS.md`
2. **Amazon Requirements:**
   - Don't use affiliate links in emails
   - Don't cloak or hide that links go to Amazon
   - Include disclosure that you earn from qualifying purchases
3. **Keep links updated:** Products go out of stock; check periodically
