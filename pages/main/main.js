const app = getApp()
var that;
Page({
  data: {
    stars:[],
    newstars:[],
    resultShow:[],
    showView:0,
    display:false,
    display2:false
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
      
      deleteDiary.splice(objectIndex,1);//使用splice方发去掉当前位置的日志
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

//搜索区域
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {//像rpgmaker里的开关，搜索功能完成！今日ok！
    this.setData({
      inputVal: "",
      inputShowed: false,
      display2:false,
      display:true 
    });

  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
    
  },
  inputTyping: function (e) {
    //搜索数据
    var that = this;
    var keyWord =  e.detail.value;
    var array1 = e.currentTarget.dataset.array;
    that.setData({
      display:false 
    });
    console.log(keyWord)
    console.log(array1)
    //console.log(array1[0].rhesis)
    var result = [];
    /*
    1，获取到输入的值和返回的数组
    2，新建一个新的数组
    3，对输入的值和数组中的内容进行匹配
    4，匹配到值后使用push推到新的数组中
    5，将新的数组渲染到画面中
    6，取消后，返回原先的画面
    */
   if(keyWord !=""){
     for(var i=0;i <array1.length;i++){
      if (keyWord === array1[i].rhesis){
        console.log("哈哈")
        var resultList = array1[i];
        result.push(resultList);//将查找到的数组推到查找结果的列表里面
        console.log(result)
        that.setData({
          resultShow: result,
          display2:true  
        });
      }
      
     }
   }
  
  },
})