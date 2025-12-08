const ctx = document.getElementById('radarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['パワー', 'メンタル', '腹囲', 'スピード', '知能', '協調性'],
    datasets: [{
      label: 'ステータス',
      data: [85, 40, 92, 35, 50, 85],
      fill: true,
      backgroundColor: 'rgba(96, 255, 228, 0.3)',
      borderColor: 'rgba(63, 230, 236, 1)',
      pointBackgroundColor: 'rgba(21, 84, 109, 1)'
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
