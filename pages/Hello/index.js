//index.js
//获取应用实例
const app = getApp()
var Bmob = require('../../utils/bmob.js');
var util = require('../../utils/util.js');//获取时间  
var time = util.formatTime(new Date());
const MENU_WIDTH_SCALE = 0.82;
const FAST_SPEED_SECOND = 300;
const FAST_SPEED_DISTANCE = 5;
const FAST_SPEED_EFF_Y = 50;

Page({
  data: {
    dialog:false,
    display1:true,
    display2: true,
    display3: true,
    display4: true,
    display5: true,
    display6: true,
    display7: true,
    display8: true,
    display9: true,
    display10: true,
    display11: true,
    display12: true,
    display13: true,
    display14: true,
    display15: true,
    display16: true,
    display17: true,
    display18: true,
    display19: true,
    display20: true,
    display21: true,
    display22: true,
    display23: true,
    display24: true,
    display25: true,
    display26: true,
    display27: true,
    display28: true,
    display29: true,
    display30: true,
    display31: true,
    display32: true,
    display33: true,
    display34: true,
    display35: true,
    timeInterval: 1,
    ui: {
      windowWidth: 0,
      menuWidth: 0,
      offsetLeft: 0,
      tStart: true  
    },
    indicatorDots: true,
    autoplay:false,
    interval:5000,
    duration:1000,
    article_list: [],
    postsShowSwiperList: [], 
    readamount: [],
    read1: "",
    read2: "",
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
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //这里如果使用的是setIterval的话，就会出现重复执行两次计数器count的情况，不知道为什么是两次，但要切记应该使用setTimeout方法，这样只执行一次，也不必调用clearIterval(count)，或者clearTimeout(count)。
  bindReadamountInput1: function (e) {
    var that = this;
    var regNum=new RegExp('[0-9]','g');
    var rsNum=regNum.exec(e.detail.value);
    if(rsNum) {
      var count = setTimeout(() => {
          that.setData({
          read1: e.detail.value,
          timeInterval: that.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display1: false,
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read1: "",
                })
                
              }
            }
          });
        }
      }, 660);
  }else{
    that.setData({
      read1: "",
    })
    } 
  },

  bindReadamountInput2: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read2: e.detail.value,
          timeInterval: this.data.timeInterval - 1

        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display2: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read2: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read2: "",
      })
    } 
  },
  bindReadamountInput3: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read3: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display3: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read3: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read3: "",
      })
    } 
  },
  bindReadamountInput4: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read4: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display4: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read4: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read4: "",
      })
    } 
  },
  bindReadamountInput5: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read5: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display5: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read5: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read5: "",
      })
    } 
  },

  bindReadamountInput6: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read6: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display6: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read6: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read6: "",
      })
    } 
  },
  bindReadamountInput7: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read7: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display7: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read7: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read7: "",
      })
    } 
  },
  bindReadamountInput8: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read8: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display8: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read8: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read8: "",
      })
    } 
  },
 
  bindReadamountInput9: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read9: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display9: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read9: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read9: "",
      })
    } 
  },
  bindReadamountInput10: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read10: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display10: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read10: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read10: "",
      })
    } 
  },

  bindReadamountInput11: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read11: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display11: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read11: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read11: "",
      })
    } 
  },
  bindReadamountInput12: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read12: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display12: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read12: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read12: "",
      })
    } 
  },
  bindReadamountInput13: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read13: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display13: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read13: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read13: "",
      })
    } 
  },
  bindReadamountInput14: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read14: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display14: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read14: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read14: "",
      })
    } 
  },

  bindReadamountInput15: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read15: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display15: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read15: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read15: "",
      })
    } 
  },
  bindReadamountInput16: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read16: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display16: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read16: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read16: "",
      })
    } 
  },
  bindReadamountInput17: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read17: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display17: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read17: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read17: "",
      })
    } 
  },
  bindReadamountInput18: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read18: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display18: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read18: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read18: "",
      })
    } 
  },

  bindReadamountInput19: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read19: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display19: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read19: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read19: "",
      })
    } 
  },
  bindReadamountInput20: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read20: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display20: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read20: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read20: "",
      })
    } 
  },
  bindReadamountInput21: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read21: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display21: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read21: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read21: "",
      })
    } 
  },
  bindReadamountInput22: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read22: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display22: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read22: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read22: "",
      })
    } 
  },

  bindReadamountInput23: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read23: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display23: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read23: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read23: "",
      })
    } 
  },
  bindReadamountInput24: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read24: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display24: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read24: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read24: "",
      })
    } 
  },
  bindReadamountInput25: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read25: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display25: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read25: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read25: "",
      })
    } 
  },
 
  bindReadamountInput26: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read26: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display26: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read26: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read26: "",
      })
    } 
  },
  bindReadamountInput27: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read27: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display27: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read27: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read27: "",
      })
    } 
  },
  bindReadamountInput28: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read28: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display28: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read28: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read28: "",
      })
    } 
  },

  bindReadamountInput29: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read29: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display29: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read29: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read29: "",
      })
    } 
  },
  bindReadamountInput30: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read30: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display30: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read30: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read30: "",
      })
    } 
  },
  bindReadamountInput31: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read31: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display31: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read31: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read31: "",
      })
    } 
  },
  bindReadamountInput32: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read32: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display32: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read32: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read32: "",
      })
    } 
  },

  bindReadamountInput33: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read33: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display33: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read33: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read33: "",
      })
    } 
  },
  bindReadamountInput34: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read34: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display34: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read34: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read34: "",
      })
    } 
  },
  bindReadamountInput35: function (e) {
    var that = this;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(e.detail.value);
    if (rsNum) {
      var count = setTimeout(() => {
        that.setData({
          read35: e.detail.value,
          timeInterval: this.data.timeInterval - 1
        });
        if (that.data.timeInterval == 0) {
          wx.showModal({
            title: '打卡完成',
            content: '点击取消可重新输入，点击生成图表即可生成热力图，向右滑动屏幕即可找到热力图入口',
            success: function (res) {
              if (res.confirm) {
                that.setData({
                  timeInterval: 1,
                  display35: false
                })
              } else if (res.cancel) {
                that.setData({
                  timeInterval: 1,
                  read35: "",
                })
              }
            }
          });
        }
      }, 660);

    } else {
      that.setData({
        read35: "",
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
              wx.navigateTo({
                url: '../heatmap/index'
              });
            }else if(res.cancel){
              console.log('留在此页面')
            } }
        });
      }
    })
  },
  //获取最新的三篇文章
  fetchNewThreeArticle: function(){
    var self = this;
    var molist = new Array();
    var Article = Bmob.Object.extend("article");
		var query = new Bmob.Query(Article);
    query.descending('priority');
    query.limit(3);
    query.find({
      success: function (results) {
        for (var i = 0; i < results.length; i++) {
          var _url
          var actpic = results[i].get("picture");
          if(actpic){
            _url = results[i].get("picture");
          }else {
            _url = "http://bmob-cdn-18766.b0.upaiyun.com/2018/05/08/67222884409dba5e80ce842f58bab073.jpg";
          }
          var jsonA;
          jsonA = {
            "actPic": _url || ''
          }
          molist.push(jsonA);
        }
        self.setData({
          postsShowSwiperList: molist,
          article_list: self.data.article_list.concat(results)
        }) //加载首页信息
      },
      error: function (error) {
        console.log(error)
      }
    })
  },
  showDetail: function (e) {
      var self = this;
      var index = e.currentTarget.dataset.index;
      console.log( e.currentTarget.dataset)
      console.log(self.data.article_list)
      var objectId = self.data.article_list[index].id;
      wx.navigateTo({
        url: '../../booklist/detail/detail?objectId=' + objectId
      });
    
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

  toHeatmap: function(){
    wx.navigateTo({
      url: '../heatmap/index'
    });
  },

  clearReadamount: function(){
    var that = this;
    wx.showModal({
      title: "提示",
      content: "这将清空当前已记录的数据",
      success: function(res){
        if(res.confirm){
          that.setData({
            read1: "",
            read2: "",
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

            display1: true,
            display2: true,
            display3: true,
            display4: true,
            display5: true,
            display6: true,
            display7: true,
            display8: true,
            display9: true,
            display10: true,
            display11: true,
            display12: true,
            display13: true,
            display14: true,
            display15: true,
            display16: true,
            display17: true,
            display18: true,
            display19: true,
            display20: true,
            display21: true,
            display22: true,
            display23: true,
            display24: true,
            display25: true,
            display26: true,
            display27: true,
            display28: true,
            display29: true,
            display30: true,
            display31: true,
            display32: true,
            display33: true,
            display34: true,
            display35: true,
            timeInterval: 1,
                });
        }else if(res.cancel){
          console.log("取消")
        }
      }

    })

   

    
  },


  onHide:function(){
    this.setData({
      autoplay:false
    })
  },

    //使得文本整齐显示
  onLoad(t) {
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
          console.log(time)
        }
      })
    }
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
    this.fetchNewThreeArticle();
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
