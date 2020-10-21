import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://192.168.1.103:8080/', // 基本URL 地址，动态匹配
    timeout: 1000 * 30
})

export default axios