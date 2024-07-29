(function(){
  var myChart = echarts.init(document.querySelector(".pho .chart"));
  var option = {
    title: {
      text: '城市社区工作者福利情况统计'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      // data: ['0.2', '4', '6', '8', '10']
      axisLabel: {
        formatter: function (value, index) {
            return value + '%'; // 在这里将横坐标的值加上百分号
        }
    },
    data:['1', '2', '3', '4', '5']
    },
    yAxis: {
      type: 'category',
      data: ['职业年金', '病假', '女职工哺乳假', '探亲假、婚假', '法定节假日休假', '失业保险','商业保险','定期体检','带薪年假','工作餐','大病统筹保险','工伤保险','医疗保险','住房补贴','住房公积金','养老保险']
    },
    series: [
      {
        name: '享受',
        type: 'bar',
        itemStyle:{
          color: '#bde0a7' // 设置柱状图条形的颜色
      },
        data: [85, 814, 455, 552, 835, 624,65,649,554,215,449,653,819,38,583,817]
      },
    
      {
        name: '有',
        type: 'bar',
        itemStyle:{
          color: 'rgba(26, 116, 26, 0.758)' // 设置柱状图条形的颜色
      },
        data: [96, 908, 828, 746, 900, 695,71,663,603,218,495,702,848,55,615,883]
      }
    ]
  };
   // 3. 把配置给实例对象
   myChart.setOption(option);
   // 4. 让图表跟随屏幕自动的去适应
   window.addEventListener("resize", function() {
     myChart.resize();
   });
})();



(function(){
  var myChart = echarts.init(document.querySelector(".time .chart"));
  var option = {
    title: {
      text: '政策出台(个)'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '30%']
    },
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 1,
          lt: 3,
          // color: 'rgba(0, 0, 180, 0.4)'
        },
        {
          gt: 5,
          lt: 7,
          // color: 'rgba(0, 0, 180, 0.4)'
        }
      ]
    },
    series: [
      {
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: '#5470C6',
          width: 5
        },
        markLine: {
          symbol: ['none', 'none'],
          label: { show: false },
          data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
        },
        areaStyle: {},
        data: [
          ['2017年', 1],
          ['2020年', 2],
          ['2021年', 2],
          ['2022年', 2],
          ['2023年', 1],
          ['2024年', 1],
        ]
      }
    ]
  };
     // 3. 把配置给实例对象
     myChart.setOption(option);
     // 4. 让图表跟随屏幕自动的去适应
     window.addEventListener("resize", function() {
       myChart.resize();
     });
})();
// 模拟飞行地图
