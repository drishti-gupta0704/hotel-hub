
const BASE_URL = "https://demohotelsapi.pythonanywhere.com";

async function fetchHotels() {
    try {
        const response = await fetch(`${BASE_URL}/hotels/`);

        if (!response.ok) {
            throw new Error("Failed to fetch hotels");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function fetchHotelById(id) {
    try {
        const response = await fetch(`${BASE_URL}/hotels/${id}/`);

        if (!response.ok) {
            throw new Error("Failed to fetch hotel");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}