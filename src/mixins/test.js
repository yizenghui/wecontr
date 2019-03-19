import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }

  onShow() {
    console.log('mixin onShow')
    console.log('xx onShow', wepy.$instance.globalData.token)
  }

  onRoute() {
    var page = getCurrentPages()
    console.log('mixin onRoute', wepy, page[0].route, page[0].options)
    console.log('xx onRoute', wepy.$instance.globalData.token)
  }

  onLoad() {
    console.log('mixin onLoad')
    console.log('xx onLoad', wepy.$instance.globalData.token)
  }
}
