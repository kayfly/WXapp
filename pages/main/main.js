const app = getApp()
var that;
Page({
  data: {
    stars:[],
    newstars:[],
    showView:0,
    display:false
  },
  /**
   * 跳转到 创建星球页面
   */
  toCreateStar: function(e) {
    wx.navigateTo({
      url:'createStars/createStars'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.getStorage({
      key: 'info',
      success:function(res){
        that.setData({
          newstars:res.data
        });
      }
    });
    if(that.data.newstars.length>0){
      that.setData({
        display:true  
      });
    }
  
  },


  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'info',
      success:function(res){
        that.setData({
          newstars:res.data
        });
      }
    });
    if(that.data.newstars.length>0){
      that.setData({
        display:true  
      });
    }
  },


    deleteDiary: function (e) {
      //e.currentTarget.dataset.index
      console.log(e.currentTarget.dataset.index)
    var that = this;
    //getStorage  xxxx
    //splice
    //setStorage
    wx.getStorage({
      key: 'info',
      success:function(res){
        that.setData({
          newstars:res.data
        });
      }
    });


    var newstars=that.data.newstars;
    newstars.splice(0,newstars.length);
    console.log(newstars);
    if(that.data.newstars.length>0){
      that.setData({
        display:true  
      });
    }
  },
  

})