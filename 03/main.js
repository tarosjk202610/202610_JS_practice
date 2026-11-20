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

console.log('配列全体', colors);
console.log('１番目のデータ', colors[0]);
console.log('３番目のデータ', colors[2]);
console.log('5番目のデータ', colors[4]);
console.log('データ数', colors.length);

// push
colors.push('ゴールド');
console.log('追加後の配列全体',colors);

// forEach
colors.forEach(function(color, index){
  console.log(`${index + 1}番目のカラーは${color}`);
});

colors.forEach((color, index) => {
  console.log(`${index + 1}番目のカラーは${color}`);
});

// ================================
// オブジェクト
const earphone = {
  name: 'AURORA ONE',
  price: 29800,
  color: 'マットブラック',
  isNoiseCanceling: true,
  battery: {
    continuous: '８時間',
    withCase: '32時間',
  },
};

console.log('ドット記法', earphone.name);
console.log('ブラケット記法', earphone['price']);

const targetKey = 'isNoiseCanceling';
console.log(earphone.targetKey, earphone[targetKey]);

