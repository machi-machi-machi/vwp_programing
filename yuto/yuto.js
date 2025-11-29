const ctx = document.getElementById('radarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['攻撃力', '社交性', '面白さ', '行動力', '知識', '協調性'],
    datasets: [{
      label: 'ステータス',
      data: [100, 0, 65, 85, 70, 35],
      fill: true,
      backgroundColor: 'rgba(223, 237, 100, 0.3)',
      borderColor: 'rgba(223, 237, 100, 1)',
      pointBackgroundColor: 'rgba(237, 100, 207, 1)'
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
