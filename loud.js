(function(){
  var myChart = echarts.init(document.querySelector(" .loud"));
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '5%',
        top: 60,
        bottom: 60,
        width: '100%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          { value: 60, name: '职业认同    ' },
          { value: 40, name: '评优推先   ' },
          { value: 20, name: '职级体系   ' },
          { value: 80, name: '晋升通道   ' }
        ]
      }
    ]
  };
  myChart.setOption(option)
})()