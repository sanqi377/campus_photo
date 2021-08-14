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
        selected: 3
      })
    }
  },
})
