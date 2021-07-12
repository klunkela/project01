import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "082e0500-bc8e-4f04-bb83-bc60d207e620"
    }
})

export const getUsers = (currentPage, onOnePage) => {
    return instance.get('users?page=' + currentPage + '&count=' + onOnePage)
        .then(response => {
            return response.data
        });
}