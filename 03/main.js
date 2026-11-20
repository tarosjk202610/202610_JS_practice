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
  play: function(){
    console.log('AURORA ONEで音楽を再生します');
  },
};

console.log('ドット記法', earphone.name);
console.log('ブラケット記法', earphone['price']);

const targetKey = 'isNoiseCanceling';
console.log(earphone.targetKey, earphone[targetKey]);

console.log( '入れ子', earphone.battery.continuous );

earphone.play();

const boxConfig = {
  title: "変身完了！",
  bgColor: "#00d2ff",
  textColor: "#ffffff",
  fontSize: "20px",
};

const applyBtn = document.querySelector('#apply-btn');
const targetBox = document.querySelector('#target-box');

applyBtn.addEventListener('click', function(){
  targetBox.textContent = boxConfig.title;
  targetBox.style.backgroundColor = boxConfig.bgColor;
  targetBox.style.color = boxConfig.textColor;
  targetBox.style.fontSize = boxConfig.fontSize;
});

// ================================
// CSSアニメーション
const moveBtn = document.querySelector('#move-btn');
const resetBtn = document.querySelector('#reset-btn');
const card = document.querySelector('#card');

moveBtn.addEventListener('click', function(){
  card.style.transform = 'translate(100px, 30px) scale(1.5)';
});
