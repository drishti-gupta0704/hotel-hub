
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

function saveFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function isFavorite(id) {
    const favorites = getFavorites();
    return favorites.includes(id);
}

function toggleFavorite(id) {

    let favorites = getFavorites();

    if (favorites.includes(id)) {
        favorites = favorites.filter(item => item !== id);
    } else {
        favorites.push(id);
    }

    saveFavorites(favorites);
}