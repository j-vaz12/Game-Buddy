import sendRequest from "./send-request";
const BASE_URL = "/api/game";

export async function searchAPI(query) {
    console.log("search", query)
    return sendRequest(`${BASE_URL}/search?q=${query}`);
}