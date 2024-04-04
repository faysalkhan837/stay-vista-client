import axios from "axios"
import { clearCookie } from "./auth"


const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials: true
    
})

// intercept response and cheak for unauthorized response (seation-12 part 03-01, time-38:00)
axiosSecure.interceptors.response.use(
    response => response,
    async error => {
        console.log('Error track in the inteceptor', error.response)
        if(
            error.response && 
            (error.response.status === 401 || error.response.status === 403)
        ){
            await clearCookie()
            window.location.replace('/login')
        }
        return Promise.reject(error)
    }
)

export default axiosSecure;