const ctx = document.getElementById('radarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['パワー', 'メンタル', '運', 'スピード', '知能', '協調性'],
    datasets: [{
      label: 'ステータス',
      data: [10, 100, 15, 80, 80, 90],
      fill: true,
      backgroundColor: 'rgba(105, 4, 97, 0.3)',
      borderColor: 'rgba(237, 100, 214, 1)',
      pointBackgroundColor: 'rgba(237, 100, 207, 1)'
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
