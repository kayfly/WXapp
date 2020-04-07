var that
Page({
	data: {
		md: {}
	},
	onLoad: function (options) {
		that = this;
		// 获取传参
		var objectId = options.objectId;
		console.log(objectId)
		
		const db = wx.cloud.database();
		//查询单条数据，第一个参数是这条数据的objectId值
		db.collection('chatroom').doc(objectId).get({
			success: function(res) {
			  // res.data 包含该记录的数据
			  that.setData({
				md: res.data.content,
			    article: res.data
			});
			console.log(md)
			// 渲染markdown
			},
			error: function(object, error) {
				// 查询失败
				console.log("失败")
			}
		  })
	}
})