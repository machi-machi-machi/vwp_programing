// 六角形の6方向（上→右上→右下→下→左下→左上）
const angles = [ -90, -30, 30, 90, 150, -150 ];

function calcPoint(value, angleDeg) {
  const angle = angleDeg * Math.PI / 180;
  const r = (value / 100) * 120; 
  return [
    150 + r * Math.cos(angle),
    150 + r * Math.sin(angle)
  ];
}

window.onload = () => {
  const abilityElm = document.querySelector(".abilities");
  const statsElm = document.getElementById("stats");

  const values = [
    abilityElm.dataset.str,
    abilityElm.dataset.def,
    abilityElm.dataset.spd,
    abilityElm.dataset.mag,
    abilityElm.dataset.luk,
    abilityElm.dataset.vit
  ];

  // ① 本来のポイント（最終形）
  const targetPoints = values.map((v, i) => {
    const [x, y] = calcPoint(v, angles[i]);
    return `${x},${y}`;
  });

  // ② 最初は中心の1点に全部集める（縮んだ状態）
  const center = "150,150 150,150 150,150 150,150 150,150 150,150";
  statsElm.setAttribute("points", center);

  // ③ 少し待ってから本来の形へ（transition でにゅ〜っと伸びる）
  setTimeout(() => {
    statsElm.setAttribute("points", targetPoints.join(" "));
  }, 100); // 0.1秒後に開始
};