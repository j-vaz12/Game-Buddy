import sendRequest from "./send-request";
const BASE_URL = "/api/game";

export async function searchAPI(query) {
    return sendRequest(`${BASE_URL}/search?q=${query}`);
}

export async function addGameToUser(data) {
    return sendRequest(`${BASE_URL}/userGame`, 'POST', data);
}
