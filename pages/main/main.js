const app = getApp()
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
    if(this.data.newstars.length>0){
      this.setData({
        display:true  
      });
    }
  },

})