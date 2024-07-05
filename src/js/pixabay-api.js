export function getInform(str = "") {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '43214840-c1c575028749116cdd7e0c5e8';

    const parameters = new URLSearchParams({
        key: API_KEY,
        q: str,
        image_typ: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 20,
    });
    return fetch(`${BASE_URL}?${parameters}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })

}