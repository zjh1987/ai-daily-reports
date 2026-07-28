(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // ==========================================
  // Chart 1: Model API Pricing Comparison
  // ==========================================
  var chartPricing = echarts.init(document.getElementById('chart-pricing'), null, { renderer: 'svg' });
  chartPricing.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(17,24,39,0.95)',
      borderColor: 'rgba(148,163,184,0.2)',
      textStyle: { color: '#f0f4f8' },
      appendToBody: true
    },
    legend: {
      data: ['输入价格', '输出价格'],
      textStyle: { color: muted },
      bottom: 0
    },
    grid: {
      left: '3%', right: '4%', bottom: '12%', top: '8%', containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['GPT-5.6 Sol', 'Claude Opus 4.8', 'DeepSeek V4-Pro', 'DeepSeek V4-Flash', 'Qwen 3.7-Max', 'Kimi K2.6'],
      axisLabel: { color: muted, fontSize: 11, rotate: 15 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value',
      name: '美元/百万Token',
      nameTextStyle: { color: muted },
      axisLabel: { color: muted },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: 'rgba(148,163,184,0.08)' } }
    },
    series: [
      {
        name: '输入价格',
        type: 'bar',
        data: [5, 15, 1.5, 0.5, 2, 3],
        itemStyle: { color: accent, borderRadius: [4, 4, 0, 0] },
        barWidth: '28%'
      },
      {
        name: '输出价格',
        type: 'bar',
        data: [15, 75, 4, 2, 6, 9],
        itemStyle: { color: accent2, borderRadius: [4, 4, 0, 0] },
        barWidth: '28%'
      }
    ]
  });
  window.addEventListener('resize', function() { chartPricing.resize(); });

  // ==========================================
  // Chart 2: Enterprise Agent ROI & Payback
  // ==========================================
  var chartRoi = echarts.init(document.getElementById('chart-roi'), null, { renderer: 'svg' });
  chartRoi.setOption({
    animation: false,
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(17,24,39,0.95)',
      borderColor: 'rgba(148,163,184,0.2)',
      textStyle: { color: '#f0f4f8' },
      appendToBody: true,
      formatter: function(p) {
        return '<strong>' + p.name + '</strong><br/>回本周期: ' + p.value[0] + '个月<br/>ROI指数: ' + p.value[1];
      }
    },
    grid: {
      left: '8%', right: '8%', bottom: '12%', top: '10%', containLabel: true
    },
    xAxis: {
      type: 'value',
      name: '回本周期（月）',
      nameTextStyle: { color: muted },
      min: 0, max: 14,
      axisLabel: { color: muted },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: 'rgba(148,163,184,0.08)' } }
    },
    yAxis: {
      type: 'value',
      name: 'ROI指数',
      nameTextStyle: { color: muted },
      min: 0, max: 10,
      axisLabel: { color: muted },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: 'rgba(148,163,184,0.08)' } }
    },
    series: [
      {
        type: 'scatter',
        symbolSize: function(val) { return val[2] * 3.5; },
        data: [
          [4.1, 8.5, 12, '客服Agent'],
          [6.2, 7.2, 10, '合同审查Agent'],
          [8.5, 6.0, 9, '病历摘要Agent'],
          [7.0, 5.5, 8, '产线监测Agent'],
          [5.5, 7.8, 11, '报表自动化Agent'],
          [9.0, 4.5, 7, '政策咨询Agent']
        ],
        itemStyle: {
          color: function(p) {
            var colors = [accent, accent2, '#a78bfa', '#34d399', '#fbbf24', '#f472b6'];
            return colors[p.dataIndex % colors.length];
          },
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.3)'
        },
        label: {
          show: true,
          formatter: function(p) { return p.data[3]; },
          position: 'top',
          color: muted,
          fontSize: 11
        }
      }
    ]
  });
  window.addEventListener('resize', function() { chartRoi.resize(); });

  // ==========================================
  // Chart 3: July 2026 Timeline
  // ==========================================
  var chartTimeline = echarts.init(document.getElementById('chart-timeline'), null, { renderer: 'svg' });
  chartTimeline.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(17,24,39,0.95)',
      borderColor: 'rgba(148,163,184,0.2)',
      textStyle: { color: '#f0f4f8' },
      appendToBody: true,
      formatter: function(p) {
        var item = p[0];
        var labels = [
          'Claude Sonnet 5发布',
          'GPT-5.6内测启动',
          'Anthropic 965亿估值',
          'ChatGPT Work发布',
          'DeepSeek V4发布',
          'WorkBuddy鸿蒙上架',
          'Kimi K3开源',
          '智能体安全国标立项'
        ];
        return '<strong>7月' + item.axisValue + '日</strong><br/>' + labels[item.dataIndex];
      }
    },
    grid: {
      left: '3%', right: '4%', bottom: '8%', top: '15%', containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['1', '10', '15', '20', '25', '27', '27深夜', '28'],
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value',
      show: false,
      min: 0, max: 10
    },
    series: [
      {
        type: 'line',
        data: [3, 5, 4, 6, 5, 7, 9, 8],
        smooth: true,
        symbol: 'circle',
        symbolSize: 14,
        lineStyle: {
          color: accent,
          width: 3,
          shadowColor: 'rgba(56,189,248,0.3)',
          shadowBlur: 10
        },
        itemStyle: {
          color: accent,
          borderColor: '#0a0e1a',
          borderWidth: 3
        },
        areaStyle: {
          color: {
            type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(56,189,248,0.2)' },
              { offset: 1, color: 'rgba(56,189,248,0)' }
            ]
          }
        },
        markPoint: {
          data: [
            { coord: ['1', 3], value: 'Claude 5', itemStyle: { color: accent2 } },
            { coord: ['10', 5], value: 'GPT-5.6', itemStyle: { color: accent } },
            { coord: ['20', 6], value: 'Work', itemStyle: { color: '#a78bfa' } },
            { coord: ['27深夜', 9], value: 'K3开源', itemStyle: { color: '#34d399' } },
            { coord: ['28', 8], value: '国标', itemStyle: { color: '#fbbf24' } }
          ],
          label: { color: ink, fontSize: 10, fontWeight: 600 },
          symbolSize: 50
        }
      }
    ]
  });
  window.addEventListener('resize', function() { chartTimeline.resize(); });

})();
