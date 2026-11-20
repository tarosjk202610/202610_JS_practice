const cardList = document.querySelectorAll('.card');

console.log('カードのまとめ箱', cardList);

cardList.forEach(function(singleCard){
  console.log(singleCard);

  singleCard.addEventListener('click', function(){
    singleCard.textContent = '選択中！';
    singleCard.style.backgroundColor = '#00d2ff';
  });
});

// ================================
// 配列
const colors = ['ブラック', 'シルバー', 'ネイビー'];
