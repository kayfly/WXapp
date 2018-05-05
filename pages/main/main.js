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

/*
删除日志的操作要注意，我们修改的数据不会马上渲染到页面，需要调用一下setDat()方发才能立即生效

*/
    deleteDiary: function (e) {
      var that = this;
      console.log(e.currentTarget.dataset.index)
      console.log(e)
      var objectIndex = e.currentTarget.dataset.index;
      var deleteDiary = e.currentTarget.dataset.array;
      
      deleteDiary.splice(objectIndex,1);
      console.log(deleteDiary);
      
      wx.setStorage({
        key: 'info',
        data: deleteDiary,
        success:function(res){
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
    });
  },
})