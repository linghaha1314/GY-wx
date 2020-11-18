import Axios from 'axios'

const axios = Axios.create({
    // baseURL: 'http://localhost:64002/', // 基本URL 地址，动态匹配
    timeout: 1000 * 30,
    // `headers` 是即将被发送的自定义请求头
    // headers: {
    //     'X-Requested-With': 'XMLHttpRequest',
    //     'Access-Control-Allow-Origin': '*'
    // },
})


export default axios
