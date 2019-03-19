/* eslint-disable padded-blocks */
import base from './base'
import wepy from 'wepy'

/**
 * 权限服务类
 */
export default class user extends base {
   /**
   * 获取用户信息(首次需要按钮授权登录)
   */
  static async getUserInfo() {
    if (wepy.$instance.globalData.userInfo == null) {
    // 查看是否授权
      let auth = await wepy.getSetting()
      if (auth.authSetting['scope.userInfo']) {
        // 已授权
        let user = await wepy.getUserInfo()
        wepy.$instance.globalData.userInfo = user.userInfo
        // this.get(`${this.baseUrl}/api/checkopenid`)
        this.CryptUserInfo(user)
      }
    }
    return wepy.$instance.globalData.userInfo
  }

   /**
   * 同步用户数据到服务器上
   */
  static async GetPosterConfig(theme) {
    return this.get(`${this.baseUrl}/api/getposter`, {theme: theme})
  }
   /**
   * 同步用户数据到服务器上
   */
  static async CryptUserInfo(user) {
    return this.post(`${this.baseUrl}/api/crypt`, {ed: user.encryptedData, iv: user.iv})
  }

   /**
   * 签到
   */
  static async DoSign(ids) {
    return this.get(`${this.baseUrl}/api/dosign?ids=${ids}`)
  }

  /**
   * 同步用户数据到服务器上
   */
  static async CheckSign() {
    return this.get(`${this.baseUrl}/api/checksign`)
  }

  /**
   * 获取今天签到详细情况
   */
  static async GetTodaySignInfo() {
    return this.get(`${this.baseUrl}/api/gettodaysigninfo`)
  }
   /**
   * 获取会话
   */
  static async sign(jsCode) {
    const url = `${this.baseUrl}/sign?code=${jsCode}`
    const {token} = await this.get(url)
    if (token !== ``) {
      // 修改
      wepy.$instance.globalData.token = token
    }
    return token
  }

  static async getOpenID() {
    const url = `${this.baseUrl}/api/getopenid`
    return await this.get(url)
  }

  static async getUser(id) {
    const url = `${this.baseUrl}/api/user/${id}`
    return await this.get(url)
  }

  static async getUserFollow(id) {
    const url = `${this.baseUrl}/api/user/${id}/follow`
    return await this.get(url)
  }

}
