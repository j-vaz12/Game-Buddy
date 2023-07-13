import sendRequest from "./send-request";
const  BASE_URL = '/api/userGames';

export async function getAllUserGames() {
    return sendRequest(`${BASE_URL}/user`)
}