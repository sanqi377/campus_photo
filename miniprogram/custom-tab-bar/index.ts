Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#fff",
    list: [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "../static/icon/index.png",
        "selectedIconPath": "../static/icon/index.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/square/index",
        "iconPath": "../static/icon/square.png",
        "selectedIconPath": "../static/icon/square.png",
        "text": "动态"
      },
      {
        "pagePath": "/pages/photo/index",
        "iconPath": "../static/icon/create.png",
        "selectedIconPath": "../static/icon/create.png",
        "text": "相册"
      },
      {
        "pagePath": "/pages/user/index",
        "iconPath": "../static/icon/user.png",
        "selectedIconPath": "../static/icon/user.png",
        "text": "我的"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e: any) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      console.log(data.index)
      this.setData({
        selected: data.index
      })
    }
  }
})