
function formatPrice(price) {
    return Number(price).toLocaleString("en-IN");
}

function showLoader(loader) {
    loader.style.display = "block";
}

function hideLoader(loader) {
    loader.style.display = "none";
}