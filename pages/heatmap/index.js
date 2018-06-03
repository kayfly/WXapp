import * as echarts from '../../ec-canvas/echarts';

const app = getApp();
let GLOBAL_CHART=[]
function initChart(canvas, width, height) {
  
  GLOBAL_CHART=[canvas,width,height]
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var bgColor = '#34C6CD';
  
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

  model.data=(wx.getStorageSync("readamount"))
  const data = model.data.map(function (item) {
  return [item[1], item[0], item[2] || '-'];
});
  
  const option = {
    backgroundColor: bgColor,
    tooltip: {
      position: 'bottom'
    },
    animation: false,
    grid: {
      bottom: 20,
      top: 20,
      left: 80
    },
    xAxis: {
      type: 'category',
      data: model.xCates,
      axisLabel:
      {
        textStyle: {
          color: '#fff',//坐标值得具体的颜色

        }
      }
    },
    yAxis: {
      type: 'category',
      data: model.yCates,
      axisLabel:
      {
        textStyle: {
          color: '#fff',//坐标值得具体的颜色

        }
      }
    },
    visualMap: {
      min: 5,
      max: 40,
      show: false,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10,
      inRange: {
        color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
      }
    },
    series: [{
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: '这是我近期读书数据的统计！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onTap(){
    initChart(GLOBAL_CHART[0],GLOBAL_CHART[1],GLOBAL_CHART[2])
  },
  onReady() {
  }
});