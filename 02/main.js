// ================================
// 要素の取得
const nameEl = document.querySelector('#product-name');
const priceEl = document.querySelector('#product-price');
const btnBlack = document.querySelector('#btn-black');
const btnBlue = document.querySelector('#btn-blue');
const btnSilver = document.querySelector('#btn-silver');

// ================================
// 関数 - 表示を変更する
// const updateColorSpec = function(){}; //関数式
/**
 * カラーシミュレーターの表示を変更する(JSDoc)
 * 
 * @param {string} colorName 色の名前
 * @param {string} priceText 価格
 * @param {string} titleColor タイトルの文字色
 * @return {void}
 */
function updateColorSpec(colorName, priceText, titleColor){
  // nameEl.textContent = 'AURORA ONE - ' + colorName;
  nameEl.textContent = `AURORA ONE - ${colorName}`; //テンプレートリテラル
  priceEl.textContent = priceText;
  nameEl.style.color = titleColor;
}

// ================================
// イベント処理
btnBlack.addEventListener('click', function(){
  updateColorSpec('マットブラック', '￥29,800（税込）', '#111');
});

btnBlue.addEventListener('click', function(){
  updateColorSpec('オーロラブルー', '￥32,800（限定価格・税込）', '#00d2ff');
});
