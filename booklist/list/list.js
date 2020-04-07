var that;
Page({
	data: {
		page_index: 0,
		article_list: [],
		loadingTip: '上拉加载更多'
	},
	onLoad: function () {
		that = this;
		that.loadArticle();
	},
	loadArticle: function () {
		const db = wx.cloud.database();	
		db.collection('chatroom').get({
			success: function(res) {
			  // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
			  console.log(res.data)
			  that.setData({
							article_list: that.data.article_list.concat(res.data)
						});
						
				console.log(res.data.length)
			}
		  });
		},
	
	showDetail: function (e) {
		// 获取wxml元素绑定的index值
		var index = e.currentTarget.dataset.index;
		console.log(index);
		console.log(e.currentTarget.dataset)
		// 取出objectId
		var objectId = that.data.article_list[index]._id;
		console.log(objectId);
		// 跳转到详情页
		wx.navigateTo({
			url: '../detail/detail?objectId=' + objectId
		});
	},
	onReachBottom: function () {
	}
});