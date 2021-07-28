import axios from "axios";
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "082e0500-bc8e-4f04-bb83-bc60d207e620"
    }
})
export const usersAPI = {
    getUsers(currentPage, onOnePage) {
        return instance.get('users?page=' + currentPage + '&count=' + onOnePage)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post('https://social-network.samuraijs.com/api/1.0/follow/' + userId)
    },
    unfollow(userId) {
        return instance.delete('https://social-network.samuraijs.com/api/1.0/follow/' + userId)
    },
    getProfile(userId) {
        return instance.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
    }
}
export const authAPI = {
   me() {
       return instance.get('https://social-network.samuraijs.com/api/1.0/auth/me')
   }
}
