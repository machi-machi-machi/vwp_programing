// カード本体押下時処理
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {

      const id = card.dataset.id;

      console.log("押されたカードID:", id);
    })
})