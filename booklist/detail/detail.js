var Bmob = require('../../utils/bmob.js');
var wemark = require('../../wemark/wemark.js');

Page({
	data: {
		wemark: {}
	},
	onLoad: function (options) {
		var that = this;
		// 获取传参
		var objectId = options.objectId;
		// 向Bmob请求详情页数据
		var Article = Bmob.Object.extend("article");
		//创建查询对象，入口参数是对象类的实例
		var query = new Bmob.Query(Article);
		//查询单条数据，第一个参数是这条数据的objectId值
		query.get(objectId, {
			success: function(result) {
				// 查询成功，调用get方法获取对应属性的值
				var content = result.get("content");
				console.log(content);
			    that.setData({
					content: content,
			    	article: result
			    });
				// 渲染markdown
				var wemark = require('../../wemark/wemark.js');
			    wemark.parse(result.get("content"), that, {
					imageWidth: wx.getSystemInfoSync().windowWidth - 40,
					name: 'wemark'
			    })
			},
			error: function(object, error) {
				// 查询失败
				console.log("失败")
			}
		});
	}
})