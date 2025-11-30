const ctx = document.getElementById('radarChart');
const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

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


//以降ダイアログ関連
// 開く
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// 閉じる
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 背景クリックで閉じる
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});