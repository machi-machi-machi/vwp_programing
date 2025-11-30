const ctx = document.getElementById('radarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['パワー', 'メンタル', '集中力', 'スピード', '知能', '協調性'],
    datasets: [{
      label: 'ステータス',
      data: [95, 80, 10, 60, 75, 0],
      fill: true,
      backgroundColor: 'rgba(156, 94, 226, 0.3)',
      borderColor: 'rgba(131, 0, 253, 1)',
      pointBackgroundColor: 'rgba(0, 200, 207, 1)'
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
