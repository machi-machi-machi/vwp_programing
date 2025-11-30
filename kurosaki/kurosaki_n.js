const ctx = document.getElementById('radarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['パワー', 'メンタル', 'やる気', 'スピード', '知能', '協調性'],
    datasets: [{
      label: 'ステータス',
      data: [70, 50, 30, 55, 75, 70],

      /* ▼ グラフ（塗り潰し）の色 */
      backgroundColor: 'rgba(0, 95, 8, 0.4)',

      /* ▼ 外周線（六角形ライン） */
      borderColor: '#0c5510ff',
      borderWidth: 4,

      /* ▼ データ点 */
      pointBackgroundColor: '#2e8a00ff',
      pointBorderColor: '#1ca101ff',
      pointRadius: 4
    }]
  },

  options: {
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {size: 18, family: "Mochiy Pop One" }
        }
      }
    },

    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {display: false,color: "white"},
        grid: {color: 'rgba(255, 255, 255, 1)'},
        angleLines: {color: 'rgba(255, 255, 255, 1)'},
        pointLabels: {
          color: "white",
          font: {size: 20, family: "Mochiy Pop One" }
        }
      }
    },
  }
});
