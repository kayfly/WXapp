//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');//获取时间  
var time = util.formatTime(new Date());
const MENU_WIDTH_SCALE = 0.82;
const FAST_SPEED_SECOND = 300;
const FAST_SPEED_DISTANCE = 5;
const FAST_SPEED_EFF_Y = 50;

//var YesterdayTime = util.formatYesterdayTime(new Date());//昨天
// 再通过setData更改Page()里面的data，动态更新页面的数据
//var pCardTime = YesterdayTime;
Page({
  data: {
    dialog:false,
    autoplay:false,
    ui: {
      windowWidth: 0,
      menuWidth: 0,
      offsetLeft: 0,
      tStart: true  
    },
    indicatorDots: true,
    autoplay:true,
    interval:5000,
    duration:1000,
    imgUrls:[
      "http://bmob-cdn-18766.b0.upaiyun.com/2018/05/05/e13ecae440f0df7980dca6e53dceec07.jpeg"
    ],
    readamount: [],
    read1: "0",
    read2: "12",
    read3: "",
    read4: "",
    read5: "",
    read6: "",
    read7: "",
    read8: "",
    read9: "",
    read10: "",
    read11: "",
    read12: "",
    read13: "",
    read14: "",
    read15: "",
    read16: "",
    read17: "",
    read18: "",
    read19: "",
    read20: "",
    read21: "",
    read22: "",
    read23: "",
    read24: "",
    read25: "",
    read26: "",
    read27: "",
    read28: "",
    read29: "",
    read30: "",
    read31: "",
    read32: "",
    read33: "",
    read34: "",
    read35: "",
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
  bindReadamountInput4: function (e) {
    this.setData({
      read4: e.detail.value,
    });
  },
  bindReadamountInput5: function (e) {
    this.setData({
      read5: e.detail.value,
    });
  },

  bindReadamountInput6: function (e) {
    this.setData({
      read6: e.detail.value,
    });
  },
  bindReadamountInput7: function (e) {
    this.setData({
      read7: e.detail.value,
    });
  },
  bindReadamountInput8: function (e) {
    this.setData({
      read8: e.detail.value,
    });
  },
 
  bindReadamountInput9: function (e) {
    this.setData({
      read9: e.detail.value,
    });
  },
  bindReadamountInput10: function (e) {
    this.setData({
      read10: e.detail.value,
    });
  },

  bindReadamountInput11: function (e) {
    this.setData({
      read11: e.detail.value,
    });
  },
  bindReadamountInput12: function (e) {
    this.setData({
      read12: e.detail.value,
    });
  },
  bindReadamountInput13: function (e) {
    this.setData({
      read13: e.detail.value,
    });
  },
  bindReadamountInput14: function (e) {
    this.setData({
      read14: e.detail.value,
    });
  },

  bindReadamountInput15: function (e) {
    this.setData({
      read15: e.detail.value,
    });
  },
  bindReadamountInput16: function (e) {
    this.setData({
      read16: e.detail.value,
    });
  },
  bindReadamountInput17: function (e) {
    this.setData({
      read17: e.detail.value,
    });
  },
  bindReadamountInput18: function (e) {
    this.setData({
      read18: e.detail.value,
    });
  },

  bindReadamountInput19: function (e) {
    this.setData({
      read19: e.detail.value,
    });
  },
  bindReadamountInput20: function (e) {
    this.setData({
      read20: e.detail.value,
    });
  },
  bindReadamountInput21: function (e) {
    this.setData({
      read21: e.detail.value,
    });
  },
  bindReadamountInput22: function (e) {
    this.setData({
      read22: e.detail.value,
    });
  },

  bindReadamountInput23: function (e) {
    this.setData({
      read23: e.detail.value,
    });
  },
  bindReadamountInput24: function (e) {
    this.setData({
      read24: e.detail.value,
    });
  },
  bindReadamountInput25: function (e) {
    this.setData({
      read25: e.detail.value,
    });
  },
 
  bindReadamountInput26: function (e) {
    this.setData({
      read26: e.detail.value,
    });
  },
  bindReadamountInput27: function (e) {
    this.setData({
      read27: e.detail.value,
    });
  },
  bindReadamountInput28: function (e) {
    this.setData({
      read28: e.detail.value,
    });
  },

  bindReadamountInput29: function (e) {
    this.setData({
      read29: e.detail.value,
    });
  },
  bindReadamountInput30: function (e) {
    this.setData({
      read30: e.detail.value,
    });
  },
  bindReadamountInput31: function (e) {
    this.setData({
      read31: e.detail.value,
    });
  },
  bindReadamountInput32: function (e) {
    this.setData({
      read32: e.detail.value,
    });
  },

  bindReadamountInput33: function (e) {
    this.setData({
      read33: e.detail.value,
    });
  },
  bindReadamountInput34: function (e) {
    this.setData({
      read34: e.detail.value,
    });
  },
  bindReadamountInput35: function (e) {
    this.setData({
      read35: e.detail.value,
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
    //第一周
      model.data[0][2] = this.data.read1;
      model.data[5][2] = this.data.read2;
      model.data[10][2] = this.data.read3;
      model.data[15][2] = this.data.read4;
      model.data[20][2] = this.data.read5;
      model.data[25][2] = this.data.read6;
      model.data[30][2] = this.data.read7;
    //第二周
      model.data[1][2] = this.data.read8;
      model.data[6][2] = this.data.read9;
      model.data[11][2] = this.data.read10;
      model.data[16][2] = this.data.read11;
      model.data[21][2] = this.data.read12;
      model.data[26][2] = this.data.read13;
      model.data[31][2] = this.data.read14;
    //第三周
    model.data[2][2] = this.data.read15;
    model.data[7][2] = this.data.read16;
    model.data[12][2] = this.data.read17;
    model.data[17][2] = this.data.read18;
    model.data[22][2] = this.data.read19;
    model.data[27][2] = this.data.read20;
    model.data[32][2] = this.data.read21;
    //第四周
    model.data[3][2] = this.data.read22;
    model.data[8][2] = this.data.read23;
    model.data[13][2] = this.data.read24;
    model.data[18][2] = this.data.read25;
    model.data[23][2] = this.data.read26;
    model.data[28][2] = this.data.read27;
    model.data[33][2] = this.data.read28;
    //第五周
    model.data[4][2] = this.data.read29;
    model.data[9][2] = this.data.read30;
    model.data[14][2] = this.data.read31;
    model.data[19][2] = this.data.read32;
    model.data[24][2] = this.data.read33;
    model.data[29][2] = this.data.read34;
    model.data[34][2] = this.data.read35;
    
      this.data.readamount = model.data;
      wx.setStorage({
      key: 'readamount',
      data: this.data.readamount,
      success: function () {
        wx.showModal({
          title: '提示',
          content: '图表已生成，快去看看吧！',
          success:function(res){
            if(res.confirm){
              wx.switchTab({
                url: '../heatmap/index'
              });
            }else if(res.cancle){
              console.log('留在此页面')
            }
          }

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
  },

   
  changeCurIndex:function(){
    this.setData({
      curIndex:curIndex
    })},


  onHide:function(){
    this.setData({
      autoplay:false
    })
  },

    //使得文本整齐显示
     onLoad(t) {
    var self = this;
    //this.getAll();
    //this.fetchTopThreePosts(); //获取轮播图的3篇文章
    try {
      let res = wx.getSystemInfoSync()
      this.windowWidth = res.windowWidth;
      this.data.ui.menuWidth = this.windowWidth * MENU_WIDTH_SCALE;
      this.data.ui.offsetLeft = 0;
      this.data.ui.windowWidth = res.windowWidth;
      this.setData({ ui: this.data.ui })
    } catch (e) {
    }
  },


  onShow: function (e) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight1: res.windowHeight,
          windowWidth1: res.windowWidth,
          autoplay: true
        })
      }
    })
  },

    //--------------------------------------------------------------------------------------------------------
    handlerStart(e) {
      let { clientX, clientY } = e.touches[0];
      this.tapStartX = clientX;
      this.tapStartY = clientY;
      this.tapStartTime = e.timeStamp;
      this.startX = clientX;
      this.data.ui.tStart = true;
      this.setData({ ui: this.data.ui })
     
    },
    handlerMove(e) {
      let { clientX } = e.touches[0];
      let { ui } = this.data;
      let offsetX = this.startX - clientX;
      this.startX = clientX;
      ui.offsetLeft -= offsetX;
      if (ui.offsetLeft <= 0) {
        ui.offsetLeft = 0;
      } else if (ui.offsetLeft >= ui.menuWidth) {
        ui.offsetLeft = ui.menuWidth;
      }
      this.setData({ ui: ui })
      
    },
    handlerCancel(e) {
      // console.log(e);
    },
    handlerEnd(e) {
      this.data.ui.tStart = false;
      this.setData({ ui: this.data.ui })
      let { ui } = this.data;
      let { clientX, clientY } = e.changedTouches[0];
      let endTime = e.timeStamp;
      //快速滑动
      if (endTime - this.tapStartTime <= FAST_SPEED_SECOND) {
        //向左
        if (this.tapStartX - clientX > FAST_SPEED_DISTANCE) {
          ui.offsetLeft = 0;
        } else if (this.tapStartX - clientX < -FAST_SPEED_DISTANCE && Math.abs(this.tapStartY - clientY) < FAST_SPEED_EFF_Y) {
          ui.offsetLeft = ui.menuWidth;
        } else {
          if (ui.offsetLeft >= ui.menuWidth / 2) {
            ui.offsetLeft = ui.menuWidth;
          } else {
            ui.offsetLeft = 0;
          }
        }
      } else {
        if (ui.offsetLeft >= ui.menuWidth / 2) {
          ui.offsetLeft = ui.menuWidth;
        } else {
          ui.offsetLeft = 0;
        }
      }
      this.setData({ ui: ui })
     
    },
    handlerPageTap(e) {
      let { ui } = this.data;
      if (ui.offsetLeft != 0) {
        ui.offsetLeft = 0;
        this.setData({ ui: ui })
       
      }
    },
    handlerAvatarTap(e) {
      let { ui } = this.data;
      if (ui.offsetLeft == 0) {
        ui.offsetLeft = ui.menuWidth;
        this.setData({ ui: ui })
      }
    },
  })
