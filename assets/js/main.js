// assets/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    initializeFavorites();
    initializeFoodFilter();
});

// Favorites System
function initializeFavorites() {
    const favorites = JSON.parse(localStorage.getItem('aipFavorites')) || [];
    updateFavoriteButtons(favorites);
}

function toggleFavorite(recipeId) {
    let favorites = JSON.parse(localStorage.getItem('aipFavorites')) || [];
    
    if (favorites.includes(recipeId)) {
        favorites = favorites.filter(id => id !== recipeId);
    } else {
        favorites.push(recipeId);
    }
    
    localStorage.setItem('aipFavorites', JSON.stringify(favorites));
    updateFavoriteButtons(favorites);
}

function updateFavoriteButtons(favorites) {
    document.querySelectorAll('.favorite-button').forEach(button => {
        const recipeId = button.getAttribute('data-recipe-id');
        if (favorites.includes(recipeId)) {
            button.classList.add('favorited');
            button.textContent = '♥ Saved';
        } else {
            button.classList.remove('favorited');
            button.textContent = '♥ Save Recipe';
        }
    });
}

// Food Filter System
function initializeFoodFilter() {
    const userRestrictions = JSON.parse(localStorage.getItem('aipRestrictions')) || [];
    const filterForm = document.getElementById('food-filter-form');
    
    if (filterForm) {
        filterForm.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = userRestrictions.includes(checkbox.value);
        });
        
        filterForm.addEventListener('change', updateFilters);
    }
}

function updateFilters() {
    const form = document.getElementById('food-filter-form');
    const restrictions = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    localStorage.setItem('aipRestrictions', JSON.stringify(restrictions));
    filterRecipes(restrictions);
}

function filterRecipes(restrictions) {
    document.querySelectorAll('.recipe-card').forEach(card => {
        const foods = JSON.parse(card.dataset.foods || '[]');
        const isAllowed = restrictions.every(restriction => !foods.includes(restriction));
        card.style.display = isAllowed ? 'block' : 'none';
    });
}