const ctx = document.getElementById('radarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['パワー', 'メンタル', 'スタイル', 'スピード', '知能', '協調性'],
    datasets: [{
      label: 'ステータス',
      data: [10, 5, 90, 50, 90, 40],
      fill: true,
      backgroundColor: 'rgba(223, 237, 100, 0.3)',
      borderColor: 'rgba(223, 237, 100, 1)',
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
