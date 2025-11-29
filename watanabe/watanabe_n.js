const ctx = document.getElementById('radarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['パワー', 'メンタル', 'スタミナ', 'スピード', '知能', '協調性'],
    datasets: [{
      label: 'ステータス',
      data: [40, 80, 90, 60, 70, 35],

      /* ▼ グラフ（塗り潰し）の色 */
      backgroundColor: 'rgba(24, 40, 184, 0.41)',

      /* ▼ 外周線（六角形ライン） */
      borderColor: '#0400ffff',
      borderWidth: 2,

      /* ▼ データ点 */
      pointBackgroundColor: '#001affff',
      pointBorderColor: '#ffffff',
      pointRadius: 4
    }]
  },

  options: {
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 18,
            family: "New Tegomin"   // ← 凡例フォント変更
          }
        }
      }
    },

    scales: {
      r: {
        min: 0,
        max: 100,

        ticks: {
          display: false,
          color: "white"
        },

        grid: {
          color: 'rgba(255,255,255,0.35)'
        },

        angleLines: {
          color: 'rgba(255,255,255,0.35)'
        },

        pointLabels: {
          color: "white",
          font: {
            size: 20,
            family: "New Tegomin"  // ← ラベルフォント変更
          }
        }
      }
    },

    // ▼ 全体的にデフォルトフォントを変えたい場合
    defaultFontFamily: "New Tegomin"
  }
});
