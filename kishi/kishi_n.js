const ctx = document.getElementById('radarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['パワー', 'メンタル', '爆発力', 'スピード', '知能', '協調性'],
    datasets: [{
      label: 'ステータス',
      data: [85, 40, 90, 60, 30, 45],

      /* ▼ グラフ（塗り潰し）の色 */
      backgroundColor: 'rgba(240, 168, 73, 0.21)',

      /* ▼ 外周線（六角形ライン） */
      borderColor: '#ff0000ff',
      borderWidth: 2,

      /* ▼ データ点 */
      pointBackgroundColor: '#ff5e00ff',
      pointBorderColor: '#ffffff',
      pointRadius: 5
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

  // ランダムに画像を揺らす
function randomShake() {
  const img = document.querySelector(".photo-frame img");

  if (!img) return;

  // たまに揺れる（40%の確率）
  if (Math.random() < 0.4) {
    img.style.animationName = "shake-small";

    // 揺れが終わったらアニメーション解除
    setTimeout(() => {
      img.style.animationName = "none";
    }, 400); // アニメ duration と合わせる
  }
}

// 2秒ごとに揺れるか判定
setInterval(randomShake, 2000);
