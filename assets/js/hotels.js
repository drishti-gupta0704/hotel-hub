
const hotelContainer = document.getElementById("hotelContainer");
const loader = document.getElementById("loader");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

let hotels = [];
let filteredHotels = [];

async function loadHotels() {

    loader.style.display = "block";

    const response = await fetchHotels();

    loader.style.display = "none";

    if (!response || !response.data) {

        hotelContainer.innerHTML = "<h2>Unable to load hotels.</h2>";

        return;

    }

    hotels = response.data;

    filteredHotels = [...hotels];

    displayHotels(filteredHotels.slice(0, 24));

}

function displayHotels(hotelList) {

    if (hotelList.length === 0) {

        hotelContainer.innerHTML = "<h2>No Hotels Found</h2>";

        return;

    }

    let cards = "";

    hotelList.forEach(hotel => {

        cards += `
        <div class="hotel-card">

            <img
                src="${hotel.thumbnail}"
                alt="${hotel.name}"
                loading="lazy"
            >

            <div class="hotel-info">

                <h2>${hotel.name}</h2>

                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    ${hotel.location}
                </p>

                <p class="hotel-rating">
                    ⭐ ${hotel.rating}
                </p>

                <p class="hotel-price">
                    ₹${Number(hotel.price).toLocaleString("en-IN")}
                </p>

                <a href="details.html?id=${hotel.id}" class="btn">
                    View Details
                </a>

            </div>

        </div>
        `;

    });

    hotelContainer.innerHTML = cards;

}

searchInput.addEventListener("input", () => {

    const value = searchInput.value.trim().toLowerCase();

    filteredHotels = hotels.filter(hotel =>

        hotel.name.toLowerCase().includes(value) ||

        hotel.location.toLowerCase().includes(value)

    );

    displayHotels(filteredHotels.slice(0, 24));

});

sortSelect.addEventListener("change", () => {

    const value = sortSelect.value;

    if (value === "low-high") {

        filteredHotels.sort((a, b) => Number(a.price) - Number(b.price));

    }

    else if (value === "high-low") {

        filteredHotels.sort((a, b) => Number(b.price) - Number(a.price));

    }

    else if (value === "rating") {

        filteredHotels.sort((a, b) => b.rating - a.rating);

    }

    displayHotels(filteredHotels.slice(0, 24));

});

loadHotels();