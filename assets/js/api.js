
const BASE_URL = "https://demohotelsapi.pythonanywhere.com";

async function fetchHotels() {

    try {

        const response = await fetch(`${BASE_URL}/hotels/`);

        if (!response.ok) {
            throw new Error("Failed to fetch hotels");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return null;

    }

}

async function fetchHotelById(id) {

    try {

        const response = await fetch(`${BASE_URL}/hotels/${id}/`);

        if (!response.ok) {
            throw new Error("Failed to fetch hotel");
        }

        const result = await response.json();

        return result.data;

    } catch (error) {

        console.error(error);

        return null;

    }

}