import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // Do something before request is sent
        config.headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => response,

    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000,
            showClose: true
        })
        return Promise.reject(error)
    }
)

export default service
