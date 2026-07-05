
const hotelContainer = document.getElementById("hotelContainer");
const loader = document.getElementById("loader");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

let hotels = [];
let filteredHotels = [];

async function loadHotels() {

    loader.style.display = "block";

    hotels = await fetchHotels();

    filteredHotels = [...hotels.data];

    loader.style.display = "none";

    displayHotels(filteredHotels);

}

function displayHotels(hotelList) {

    hotelContainer.innerHTML = "";

    if (hotelList.length === 0) {

        hotelContainer.innerHTML = "<h2>No Hotels Found</h2>";

        return;

    }

    hotelList.forEach(hotel => {

        hotelContainer.innerHTML += `

        <div class="hotel-card">

            <img src="${hotel.thumbnail}" alt="${hotel.name}">

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
                    ₹${Number(hotel.price).toLocaleString()}
                </p>

                <a href="details.html?id=${hotel.id}" class="btn">
                    View Details
                </a>

            </div>

        </div>

        `;

    });

}

searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    filteredHotels = hotels.data.filter(hotel =>

        hotel.name.toLowerCase().includes(value) ||

        hotel.location.toLowerCase().includes(value)

    );

    displayHotels(filteredHotels);

});

sortSelect.addEventListener("change", () => {

    if (sortSelect.value === "low-high") {

        filteredHotels.sort((a, b) => Number(a.price) - Number(b.price));

    }

    else if (sortSelect.value === "high-low") {

        filteredHotels.sort((a, b) => Number(b.price) - Number(a.price));

    }

    else if (sortSelect.value === "rating") {

        filteredHotels.sort((a, b) => b.rating - a.rating);

    }

    displayHotels(filteredHotels);

});

loadHotels();