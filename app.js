//app.js

var Bmob = require("utils/bmob.js");
var common = require("utils/common.js");
Bmob.initialize("39fe8f9af92830f3131e9ac9f4882173", "70bb5a80e2ebf39112bebaa6e006bc78");

App({
  data: {
    currentUser: 0
  },//VM6565:1 thirdScriptError
  //Cannot read property 'currentUser' of undefined;at pages/ main / main getStarsInfo function;at api request success callback function
    //TypeError: Cannot read property 'currentUser' of undefined
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({

    })
  },
  globalData: {
    userInfo: null
  }
})