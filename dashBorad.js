// DOM読み込み時処理
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('searchButton');
  const input = document.getElementById('filterInput');
  const cards = document.querySelectorAll('.card');

  /**
   * カード本体クリック時処理
   */
  cards.forEach(card => {
    card.addEventListener('click', () => {

      // 遷移先のhtmlファイル名を決定
      const id = card.dataset.id;
      const folder = id.split('_')[0];
      const urlName = `${folder}/${id}.html`;
      
      // 別タブで開く
      window.open(urlName, "_blank");
    })
  });

    /**
   * 検索処理
   */
  const filterList = () => {
    const keyword = input.value.trim().toLowerCase();
    let hasMatch = false;

    cards.forEach(card => {
      const charName = card.querySelector(".char-name").textContent || "";
      const dataId = card.dataset.id || "";

      // 漢字 or 英字どちらかに keyword が含まれるか
      const isMatch = charName.includes(keyword) || dataId.toLowerCase().includes(keyword);

      if (isMatch) {
        card.style.display = "block";
        hasMatch = true;
      } else {
        card.style.display = "none";
      }
    });

    // 1件もヒットしない場合
    if (!hasMatch && keyword !== "") {
      alert(`${keyword}のデータは存在しません。\n検索は、「漢字、英字のどちらかを使用してください。」`);

      // 全カードを表示状態に
      cards.forEach(card => card.style.display = "block");

      // 検索ボックスを空に
      input.value = "";
    }
  };

  // 虫眼鏡アイコン押下時
  btn.addEventListener('click', filterList);

  // Enterキーでも検索
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") filterList();
  });
})
