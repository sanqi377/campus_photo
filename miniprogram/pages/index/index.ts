// index.ts
var util = require('../../utils/util')

Page({
  data: {
  },

  onLoad() {
    /**
     * 加载网络字体
     */
    util.loadFontFace()
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  /**
   * 跳转到创建相册页面
   */
  navigateTo: () => {
    wx.navigateTo({
      url: '/pages/photo/create/index',
    })
  }
})
