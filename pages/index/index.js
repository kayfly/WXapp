//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');//获取时间  
var time = util.formatTime(new Date());
//var YesterdayTime = util.formatYesterdayTime(new Date());//昨天
// 再通过setData更改Page()里面的data，动态更新页面的数据
//var pCardTime = YesterdayTime;
Page({
  data: {
    readamount: [],
    read1: "第一天",
    read2: "第二天",
    read3: 0,
    motto: 'Hello',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindReadamountInput1: function (e) {
    this.setData({
      read1: e.detail.value,
    });
  },

  bindReadamountInput2: function (e) {
    this.setData({
      read2: e.detail.value,
    });
  },

  bindReadamountInput3: function (e) {
    this.setData({
      read3: e.detail.value,
    });
  },
 
  onLoad: function () {
     //获取时间
   
    this.setData({
      time: time
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  welcomeDay: function(e){
    
  },
  
  //点击完成时，传递并统计阅读数据
  
  statisticalData: function (e) {
    let model = {
      yCates: ['第一天', '第二天', '第三天',
        '第四天', '第五天', '第六天',
        '第七天'],
      xCates: ['第一周', '第二周', '第三周', '第四周', '第五周'],
      data: [
        // [yCateIndex, xCateIndex, value]
        [0, 0, 5], [0, 1, 7], [0, 2, 3], [0, 3, 5], [0, 4, 2],
        [1, 0, 1], [1, 1, 2], [1, 2, 4], [1, 3, 8], [1, 4, 2],
        [2, 0, 2], [2, 1, 3], [2, 2, 8], [2, 3, 6], [2, 4, 7],
        [3, 0, 3], [3, 1, 7], [3, 2, 5], [3, 3, 1], [3, 4, 6],
        [4, 0, 3], [4, 1, 2], [4, 2, 7], [4, 3, 8], [4, 4, 9],
        [5, 0, 2], [5, 1, 2], [5, 2, 3], [5, 3, 4], [5, 4, 7],
        [6, 0, 6], [6, 1, 5], [6, 2, 3], [6, 3, 1], [6, 4, 2]
      ]
    };
      model.data[0][2] = this.data.read1;
      model.data[1][2] = this.data.read2;
      this.data.readamount = model.data;
      wx.setStorage({
      key: 'readamount',
      
      data: this.data.readamount,
      success: function () {
        wx.switchTab({
          url: '../heatmap/index'
        });
      }
    })
  },

  //获取用户信息
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
