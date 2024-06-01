import axios from "axios"

const baseURL = 'https://fakestoreapi.in/api/'


export const axiosInstance = axios.create({
    baseURL
})



axiosInstance.interceptors.request.use(async(config)=>{


    config.headers['Content-Type'] = 'application/json'


    return config
})


