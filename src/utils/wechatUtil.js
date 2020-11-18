import wx from 'weixin-js-sdk'
import store from '../store/page'

export default {
    /* 初始化wxjsdk各种接口 */
    init(apiList = [], url) {
        //需要使用的api列表
        return new Promise((resolve, reject) => {
            getSignature(store.state.page.initLink).then(res => {
                if (res.appId) {
                    wx.config({
                        // debug: true,
                        appId: res.appId,
                        timestamp: res.timestamp,
                        nonceStr: res.nonceStr,
                        signature: res.signature,
                        jsApiList: apiList
                    })
                    wx.ready(res => {
                        // 微信SDK准备就绪后执行的回调。
                        resolve(wx, res)
                    })
                } else {
                    reject(res)
                }
            })
        })
    }
}