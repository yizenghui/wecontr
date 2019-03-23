import wepy from 'wepy'

// HTTP工具类
export default class http {
  static async request (method, url, requestdata) {
    // 如果全局变量中没有签名参数，先获取签名再发出请求
    if (!wepy.$instance.globalData.token) {
      let token = await wepy.getStorageSync('token') // 获取缓存中的token
      if(token){
        // 检查缓存的token是否过期
        let checkdata = await wepy.request({ url: wepy.$instance.globalData.baseUrl + '/checktoken', data: { token: token } })
        if (this.isSuccess(checkdata)) {
          wepy.$instance.globalData.token = token
        }else{
          const {code} = await wepy.login()
          const {data} = await wepy.request({ url: wepy.$instance.globalData.baseUrl + '/gettoken', data: { code: code } })
          wepy.$instance.globalData.token = data.token
          wepy.setStorageSync('token', data.token)
        }
      }else{
        const {code} = await wepy.login()
        // localhost:8009
        const {data} = await wepy.request({ url: wepy.$instance.globalData.baseUrl + '/gettoken', data: { code: code } })
        wepy.$instance.globalData.token = data.token
        wepy.setStorageSync('token', data.token)
      }
    }

    const param = {
      url: url,
      method: method,
      data: requestdata
    }

    const res = await wepy.request(param)

    if (this.isSuccess(res)) {
      return res.data
    } else { // 如果是因为token过期了，二次授权
      console.log('resres',res)
      if(res.message ==  "Unauthenticated."){
        
        const {code} = await wepy.login()
        const {data} = await wepy.request({ url: wepy.$instance.globalData.baseUrl + '/gettoken', data: { code: code } })
        wepy.$instance.globalData.token = data.token
        wepy.setStorageSync('token', data.token)
        const param = {
          url: url,
          method: method,
          data: requestdata
        }
        const res2 = await wepy.request(param)

        if (this.isSuccess(res2)) {
          return res2.data
        } 
      }else{
        throw this.requestException(res)
      }
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess (res) {
    const wxCode = res.statusCode
    // 微信请求错误
    if (wxCode !== 200) {
      return false
    }
    return true
  }

  /**
   * 异常
   */
  static requestException (res) {
    const error = {}
    error.statusCode = res.statusCode
    const wxData = res.data
    const serverData = wxData.data
    if (serverData) {
      error.serverCode = wxData.code
      error.message = serverData.message
      error.serverData = serverData
    }
    return error
  }

  static get (url, data) {
    return this.request('GET', url, data)
  }

  static put (url, data) {
    return this.request('PUT', url, data)
  }

  static post (url, data) {
    return this.request('POST', url, data)
  }

  static patch (url, data) {
    return this.request('PATCH', url, data)
  }

  static delete (url, data) {
    return this.request('DELETE', url, data)
  }
}
