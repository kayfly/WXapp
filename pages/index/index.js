//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    time: 1
  },
  onLoad: function () {
    var count = setInterval(() => {

      this.setData({
        time: this.data.time - 1
      });
      if (this.data.time == 0) {
        wx.switchTab({
          url: '../Hello/index',
          complete: function (res) {
          }
        })
        clearInterval(count);
      }
    }, 1000);
  }
})
