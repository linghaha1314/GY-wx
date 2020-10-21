import axios from './axios'

// 实例函数
export function getCityList () {
    return axios.post('/dspManager/index/cityList')
}