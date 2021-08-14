/**
 * 加载网络字体{ 苹方字体 }
 */
const loadFontFace = () => {
  wx.loadFontFace({
    family: 'PingFangSC-Medium',
    source: 'url("https://www.qblog.cc/PingFangSC-Medium.ttf")',
  })
}
export {
  loadFontFace
}