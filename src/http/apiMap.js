import axios from './axios'

// 登录
// export function getLogin (params) {
//     return axios.post('/formLogin', params)
// }

// 登录
export function getLogin (params) {
    return axios.post('/getLogin', params)
}