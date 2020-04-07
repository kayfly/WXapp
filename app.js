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

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'qcampus-2020',
        traceUser: true,
      })
    }

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