var arrNum: number[] = []

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    arrNum: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getNum: function (e: any) {
      if (arrNum.length === 4) return
      var num: number = e.currentTarget.dataset.num;
      arrNum.push(num)
      this.setData({
        arrNum: arrNum
      })
      console.log(num, this.data.arrNum)
    },
    deleteNum: function () {
      arrNum.splice(arrNum.length - 1, 1)
      console.log(arrNum)
      this.setData({
        arrNum: arrNum
      })
    }
  }
})
