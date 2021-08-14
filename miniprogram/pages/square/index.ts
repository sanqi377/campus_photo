var util = require('../../utils/util')

Page({
  data: {
    data: [
      {
        id: 0,
        url: '../../static/img/bg1.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      },
      {
        id: 1,
        url: '../../static/img/bg2.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      },
      {
        id: 2,
        url: '../../static/img/bg3.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      },
      {
        id: 3,
        url: '../../static/img/bg4.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      },
      {
        id: 4,
        url: '../../static/img/bg5.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      },
      {
        id: 5,
        url: '../../static/img/bg6.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      },
      {
        id: 6,
        url: '../../static/img/bg7.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      },
      {
        id: 7,
        url: '../../static/img/bg8.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      },
      {
        id: 8,
        url: '../../static/img/bg9.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      },
      {
        id: 9,
        url: '../../static/img/bg10.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      },
      {
        id: 10,
        url: '../../static/img/bg11.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      },
      {
        id: 11,
        url: '../../static/img/bg12.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      },
      {
        id: 12,
        url: '../../static/img/bg13.jpg',
        name: '叁柒',
        date: '24 / JUN',
        avatar: '../../static/img/avatar.jpg',
        height: 0,
      }
    ]
  },

  onLoad() {
    /**
     * 加载网络字体
     */
    util.loadFontFace()

    /**
     * 瀑布流效果自适应高度
     */
    const _this = this
    setTimeout(() => {
      return new Promise((resolve) => {
        wx.createSelectorQuery().selectAll('.bg').boundingClientRect(function (res) {
          resolve(res)
        }).exec()
      }).then((res: any) => {
        res.forEach((item: any, index: number) => {
          _this.data.data[index].height = item.height
        })
        _this.setData({
          data: _this.data.data
        })
      })
    }, 100)
  },
})
