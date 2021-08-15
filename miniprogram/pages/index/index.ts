// index.ts
var util = require('../../utils/util')

Page({
  data: {
    showPoppus: false, // 是否显示加入相册层
    showEnterCode: false // 是否显示输入相册码层
  },
  /**
   * click `加入相册` 改变 showPoppus `true`
   */
  joinPhoto() {
    this.setData({
      showPoppus: true
    })
  },
  /**
   * click `遮罩层` 改变 showPoppus `false`
   */
  hideJoin() {
    this.setData({
      showPoppus: false,
      showEnterCode: false
    })
  },
  /**
   * click `输入相册码` 改变 showEnterCode `true`
   */
  showEnterCode() {
    this.setData({
      showPoppus: false,
      showEnterCode: true
    })
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