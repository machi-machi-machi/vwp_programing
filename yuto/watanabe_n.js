const ctx = document.getElementById('radarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['パワー', 'メンタル', 'スタミナ', 'スピード', '知能', '協調性'],
    datasets: [{
      label: 'ステータス',
      data: [40, 85, 95, 65, 70, 30],
      fill: true,
      backgroundColor: 'rgba(95, 124, 253, 0.75)',
      borderColor: 'rgba(28, 32, 255, 1)',
      pointBackgroundColor: 'rgba(82, 229, 255, 1)'
    }]
  },
  options: {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: { display: false },
        grid: { color: '#ddd' },
        angleLines: { color: '#ccc' }
      }
    }
  }
});
