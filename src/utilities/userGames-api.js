import sendRequest from "./send-request";
const  BASE_URL = '/api/userGames';

export async function getAllUserGames() {
    return sendRequest(`${BASE_URL}/user`)
}

export async function updatedUserGame(data, gameId) {
    return sendRequest(`${BASE_URL}/${gameId}`, 'PUT', data);
}

export async function removeGame(gameId) {
    return sendRequest(`${BASE_URL}/${gameId}`, 'DELETE');
}