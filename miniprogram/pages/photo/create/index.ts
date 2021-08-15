var util = require('../../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      title: ''
    }
  },

  /**
   * 获取名称
   */
  getTitle(e: any) {
    var title = e.detail.value
    this.setData({
      ['info.title']: title
    })
  },

  /**
   * 返回上一页
   */
  back() {
    wx.navigateBack()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    /**
     * 加载网络字体
     */
    util.loadFontFace()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(opts): WechatMiniprogram.Page.ICustomShareContent {
    console.log(opts.target)
    return {}
  }
})