const app = getApp()
var util = require('../../../utils/util.js');//获取时间  
var time = util.formatTime(new Date());
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diarytitle:'',
    rhesis:'',
    moodpic: 'cloud://qcampus-2020.7163-qcampus-2020-1301774162/images/mood1.png',
    type:0,
    introduction:'',
    info:[],
    activeIndex: 1,
    diaryTime: "",
    display: false,
    show1:true,
    show2:false,
    show3:false,
    show4:false,
    show5:false,
    show6:false,
    color1:'#f5f6f8',
    textcolor1:'#a2a3a7',
    color2:'#f5f6f8',
    textcolor2:'#a2a3a7',
    color3:'#f5f6f8',
    textcolor3:'#a2a3a7',
    color4:'#f5f6f8',
    textcolor4:'#a2a3a7',
    color5:'#f5f6f8',
    textcolor5:'#a2a3a7',
    color6:'#f5f6f8',
    textcolor6:'#a2a3a7',
    color7:'#f5f6f8',
    textcolor7:'#a2a3a7',
  },
  /**
   * 选择图片 打开遮罩层
   */
  chooseImage: function(event){
    this.setData({
      display: true
    });
  },
  /**
   * 选择完成 关闭遮罩层
   */
  finishChoose: function(event) {
    this.setData({
      display: false
    });
  },
  /**
   * 输入书名
   */
  bindDiaryTitleInput:function(e) {
    this.setData({
      diarytitle: e.detail.value,
      diaryTime: time,
    });
  },
  /**
   * 输入记录的名句
   */
  bindRhesisInput:function(e) {
    this.setData({
      rhesis: e.detail.value,
    });
  },
  /**
   * 选择要的背景图片
   */
  pic1: function(e) {
    this.setData({
      show1:true,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      show6:false,
      activeIndex: 1,
      moodpic: '../../../images/mood1.png'
    })
  },
  pic2: function(e) {
    this.setData({
      show2:true,
      show1:false,
      show3:false,
      show4:false,
      show5:false,
      show6:false,
      activeIndex:2,
      moodpic: '../../../images/mood2.png'
    })
  },
  pic3: function(e) {
    this.setData({
      show3:true,
      show2:false,
      show1:false,
      show4:false,
      show5:false,
      show6:false,
      activeIndex:3,
      moodpic: '../../../images/mood3.png'
    })
  },
  pic4: function(e) {
    this.setData({
      show4:true,
      show2:false,
      show3:false,
      show1:false,
      show5:false,
      show6:false,
      activeIndex:4,
      moodpic: '../../../images/mood4.png'
    })
  },
  pic5: function(e) {
    this.setData({
      show5:true,
      show2:false,
      show3:false,
      show4:false,
      show1:false,
      show6:false,
      activeIndex:5,
      moodpic: '../../../images/mood5.png'
    })
  },
  pic6: function(e) {
    this.setData({
      show6:true,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      show1:false,
      activeIndex:6,
      moodpic: '../../../images/mood6.png'
    })
  },
  /**
   * 更改选择的按钮的样式
   */
  chooseBtn1: function(e) {
    // this.style.background=red;
    this.setData({
      type:'周一',
      color1: '#21F1FC',
      textcolor1: '#fff',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn2: function(e) {
    // this.style.background=red;
    this.setData({
      type:'周二',
      color2: '#21F1FC',
      textcolor2: '#fff',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn3: function(e) {
    // this.style.background=red;
    this.setData({
      type:'周三',
      color3: '#21F1FC',
      textcolor3: '#fff',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn4: function(e) {
    // this.style.background=red;
    this.setData({
      type:'周四',
      color4: '#21F1FC',
      textcolor4: '#fff',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn5: function(e) {
    // this.style.background=red;
    this.setData({
      type:'周五',
      color5: '#21F1FC',
      textcolor5: '#fff',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn6: function(e) {
    // this.style.background=red;
    this.setData({
      type:'周六',
      color6: '#21F1FC',
      textcolor6: '#fff',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn7: function(e) {
    // this.style.background=red;
    this.setData({
      type:'周日',
      color7: '#21F1FC',
      textcolor7: '#fff',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  /**
   * 完成创建 跳转到主页面
   */
  //toCancel: function

  toMain: function(e) {
    
    if(this.data.diarytitle === ""){
      wx.showModal({
        content: '请输入标题',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      })
    } else if (this.data.type == 0){
      wx.showModal({
        content: '请选择周目',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      })
    } else if (this.data.rhesis == ""){
      wx.showModal({
        content: '记录一下心情吧！',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      })
    } 
    else {
      var newinfo = [{}];
      newinfo[0].diarytitle = this.data.diarytitle;
      newinfo[0].moodpic = this.data.moodpic;
      newinfo[0].type = this.data.type;
      newinfo[0].rhesis = this.data.rhesis;
      newinfo[0].diaryTime = this.data.diaryTime;
      this.data.info = newinfo.concat(this.data.info);
   
      const db = wx.cloud.database()
      db.collection('diary').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
          info: this.data.info,
        },
        success: function(res) {
          wx.switchTab({
            url:'../main'
          });
        }
      })
      //存入本地存储
     /* wx.setStorage({
        key: 'info',
        data: this.data.info,
        success:function(){
          wx.switchTab({
            url:'../main'
          });
        }
    });  */
  }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})