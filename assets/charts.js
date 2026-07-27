(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // Chart: AI Agent Framework Comparison Radar
  var chartFramework = echarts.init(document.getElementById('chart-framework'), null, { renderer: 'svg' });
  chartFramework.setOption({
    animation: false,
    tooltip: { appendToBody: true },
    legend: {
      data: ['LangChain', 'CrewAI', 'Microsoft Agent FW', 'OpenAI Agents SDK'],
      bottom: 0, textStyle: { color: muted, fontSize: 12 }
    },
    radar: {
      indicator: [
        { name: '社区活跃度', max: 100 },
        { name: '易用性', max: 100 },
        { name: '工具调用准确率', max: 100 },
        { name: '多Agent支持', max: 100 },
        { name: '企业级特性', max: 100 },
        { name: '生态丰富度', max: 100 }
      ],
      shape: 'circle',
      splitNumber: 4,
      axisName: { color: ink, fontSize: 12 },
      splitLine: { lineStyle: { color: rule } },
      splitArea: { show: false },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'radar',
      data: [
        { value: [95, 60, 80, 85, 75, 95], name: 'LangChain', areaStyle: { opacity: 0.1 } },
        { value: [65, 92, 94, 88, 60, 70], name: 'CrewAI', areaStyle: { opacity: 0.1 } },
        { value: [50, 70, 78, 82, 95, 60], name: 'Microsoft Agent FW', areaStyle: { opacity: 0.1 } },
        { value: [55, 88, 82, 70, 65, 55], name: 'OpenAI Agents SDK', areaStyle: { opacity: 0.1 } }
      ]
    }],
    color: [accent, accent2, muted, accent + '99']
  });
  window.addEventListener('resize', function() { chartFramework.resize(); });

  // Chart: Coding Agent Benchmark Comparison
  var chartBenchmark = echarts.init(document.getElementById('chart-benchmark'), null, { renderer: 'svg' });
  chartBenchmark.setOption({
    animation: false,
    tooltip: { appendToBody: true, trigger: 'axis' },
    legend: { data: ['Terminal-Bench 2.1', 'SWE-bench Verified'], bottom: 0, textStyle: { color: muted, fontSize: 12 } },
    grid: { left: '3%', right: '4%', bottom: '12%', top: '8%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['Claude Code', 'Codex CLI', 'Cursor', 'Devin(全自动)'],
      axisLabel: { color: ink, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value', max: 100, name: '得分(%)',
      axisLabel: { color: muted }, axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    series: [
      {
        name: 'Terminal-Bench 2.1', type: 'bar', barWidth: 24,
        data: [83.1, 83.4, null, null],
        itemStyle: { color: accent, borderRadius: [4, 4, 0, 0] }
      },
      {
        name: 'SWE-bench Verified', type: 'bar', barWidth: 24,
        data: [null, 72.1, null, 13.86],
        itemStyle: { color: accent2, borderRadius: [4, 4, 0, 0] }
      }
    ]
  });
  window.addEventListener('resize', function() { chartBenchmark.resize(); });

  // Chart: AI Agent Market Growth
  var chartMarket = echarts.init(document.getElementById('chart-market'), null, { renderer: 'svg' });
  chartMarket.setOption({
    animation: false,
    tooltip: { appendToBody: true, trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '8%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['2024', '2025', '2026', '2027E', '2028E', '2029E', '2030E'],
      axisLabel: { color: ink },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value', name: '市场规模(亿美元)',
      axisLabel: { color: muted }, axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    series: [{
      type: 'bar', data: [18, 42, 109, 178, 265, 378, 503],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: accent },
          { offset: 1, color: accent2 }
        ]),
        borderRadius: [4, 4, 0, 0]
      },
      label: { show: true, position: 'top', color: ink, fontSize: 11 }
    }]
  });
  window.addEventListener('resize', function() { chartMarket.resize(); });

  // Chart: Coding Agent Price Comparison
  var chartPrice = echarts.init(document.getElementById('chart-price'), null, { renderer: 'svg' });
  chartPrice.setOption({
    animation: false,
    tooltip: { appendToBody: true, trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '8%', top: '6%', containLabel: true },
    xAxis: {
      type: 'value', name: '月费(USD)',
      axisLabel: { color: muted }, axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    yAxis: {
      type: 'category',
      data: ['Hermes', 'TRAE Work', 'GitHub Copilot', 'Claude Code', 'Cursor', 'Codex', 'Devin Desktop'],
      axisLabel: { color: ink, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [0, 0, 10, 20, 20, 20, 20],
      itemStyle: { color: accent, borderRadius: [0, 4, 4, 0] },
      label: { show: true, position: 'right', color: ink, fontSize: 11, formatter: function(p) { return p.value === 0 ? '免费/开源' : '$' + p.value; } }
    }]
  });
  window.addEventListener('resize', function() { chartPrice.resize(); });
})();
