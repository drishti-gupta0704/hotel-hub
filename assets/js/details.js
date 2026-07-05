
const hotelDetails = document.getElementById("hotelDetails");

const params = new URLSearchParams(window.location.search);

const hotelId = params.get("id");

async function loadHotel() {

    const hotel = await fetchHotelById(hotelId);

    if (!hotel) {

        hotelDetails.innerHTML = "<h2>Hotel not found.</h2>";

        return;

    }

    hotelDetails.innerHTML = `

    <div class="details-container">

        <img
            src="${hotel.thumbnail}"
            alt="${hotel.name}"
            class="main-image"
        >

        <div class="hotel-content">

            <div class="hotel-left">

                <h1 class="hotel-title">
                    ${hotel.name}
                </h1>

                <p class="location">
                    <i class="fa-solid fa-location-dot"></i>
                    ${hotel.location}
                </p>

                <p class="rating">
                    ⭐ ${hotel.rating}
                </p>

                <p class="description">
                    ${hotel.description}
                </p>

                <div class="gallery">

                    ${hotel.photos.map(photo => `

                        <img src="${photo}" alt="${hotel.name}">

                    `).join("")}

                </div>

            </div>

            <div class="hotel-right">

                <p class="price">

                    ₹${Number(hotel.price).toLocaleString()}

                </p>

                <button class="book-btn">

                    Book Now

                </button>

            </div>

        </div>

    </div>

    `;

}

loadHotel();