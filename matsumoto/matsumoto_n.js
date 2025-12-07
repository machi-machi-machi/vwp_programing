const ctx = document.getElementById('radarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['パワー', 'メンタル', '人当たり', 'スピード', '知能', '協調性'],
    datasets: [{
      label: 'ステータス',
      data: [10, 80, 0, 50, 100, 50],
      fill: true,
      backgroundColor: 'rgba(237, 100, 100, 0.3)',
      borderColor: '#b8193f',
      pointBackgroundColor: '#a8b819ff'
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: { color: "white" }
      }
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: { display: false, color: "white" },
        grid: { color: '#ffffff88' },
        angleLines: { color: '#ffffff88' },
        pointLabels: {
          color: "white",
          font: { size: 16 }
        }
      }
    }
  }
});
