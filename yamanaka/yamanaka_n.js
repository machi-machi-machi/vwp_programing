const ctx = document.getElementById('radarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['パワー', 'メンタル', 'バイブス', 'スピード', '知能', '協調性'],
    datasets: [{
      label: 'ステータス',
      data: [90, 45, 100, 75, 55, 50],
      fill: true,
      backgroundColor: 'rgba(156, 156, 156, 0.57)',
      borderColor: 'rgba(255, 255, 255, 1)',
      pointBackgroundColor: 'rgba(255, 255, 255, 1)'
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


const bgm = document.getElementById("bgm");
document.getElementById("sound-btn").onclick = () => {
  bgm.play();
  bgm.volume = 0.4;
};