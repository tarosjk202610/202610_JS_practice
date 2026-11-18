// alert('今日は曇りです');
/*
ssss
multi line
*/

// ブラウザのコンソールにデータを出力する呪文
console.log('ここに書いたメッセージがコンソールに出力されます');

// 定数
const productName = 'AURORA ONE';
console.log('商品名は：', productName);

// 変数
let selectColor = 'マットブラック';
console.log('選択中のカラーは：', selectColor);

selectColor = 'オーロラブルー';
console.log('選択中のカラーは：', selectColor);

// 定数にデータの再代入はできない
// productName = 'AURORA TWO';

// ================================
// データ型
const userName = '山田太郎';
const userAge = 25;
const isStudent = false;
let address;
const emptyData = null;

console.log(typeof userName);
console.log(typeof userAge);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof emptyData);

// 数字と文字の違い
const num1 = 10;
const num2 = 20;
console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2);

const str1 = '10';
const str2 = '20';
console.log('結果は？' + str1 + str2); //文字列同士の連結
console.log(num1 + str2);
console.log(str2 - str1);
console.log(parseInt(str1));

// オブジェクト型
const colors = ['赤', '青', '緑'];
const userProfile = {
  name: '佐藤',
  age: 30,
};
console.log(typeof colors, typeof userProfile);

// ================================
// 条件分岐
let totalPrice = 6000;

console.log('合計金額は、', totalPrice + '円');

console.log(totalPrice >= 5000);
if (totalPrice >= 5000) {
  console.log('5000円以上なので、送料無料です！');
} else {
  console.log('送料が500円かかります。');
}

if (0) {
  console.log('trueです');
}

// ================================
// 論理演算子 AND, OR, NOT
// AND
const age = 17;
const hasLicense = true;

if (age >= 18 && hasLicense === true) {
  console.log('レンタカーを貸し出しできます。');
} else {
  console.log('条件を満たしていないので貸し出しできません。');
}

// OR
const userRole = 'admin';
const isVip = false;

if( userRole === 'admin' || isVip === true ) {
  console.log('管理者エリアへアクセス可能');
} else {
  console.log('アクセス権限がありません')
}

// NOT
const isLoggedIn = false;

if(!isLoggedIn) {
  console.log('ログインが必要です');
}

// 複合条件
const itemStock = 3;
const couponCode = 'SAVE15';
const cartTotal = 4000;

if( itemStock > 0 && ( couponCode === 'SAVE10' || cartTotal >= 5000 ) ) {
  console.log('割引を適用します');
} else {
  console.log('割引の条件を満たしていません');
}

// ================================
// 関数

function greetUser(userName) {
  console.log(userName + 'さん、こんにちは！');
}

greetUser('たなか');
greetUser('さとう');

// 戻り値の例
function calculateTaxPrice(basePrice) {
  let taxIncluded = basePrice * 1.1;
  return taxIncluded; //戻り値を作る / 関数の処理をここでストップする

  console.log('税込計算を行いました');
}

let finalPrice = calculateTaxPrice(29800);
console.log('税込価格', finalPrice);

// ================================
// アロー関数

function multiply(a, b) {
  return a * b;
}

const multiply2 = (a, b) => {
  return a * b;
};

const multiply3 = (a, b) => a * b;

console.log( multiply(2,3) );
console.log( multiply2(2,3) );
console.log( multiply3(2,3) );

// ================================
// DOM操作
const titleElement = document.getElementById('product-title');
console.log(titleElement);
const priceElement = document.querySelector('#product-price'); // CSSで使うセレクタ
console.log(priceElement);

// テキストの入れ替え
titleElement.textContent = 'AURORA ONE - マットブラック';
priceElement.textContent = '￥29,800';

// スタイルの変更
titleElement.style.color = '#00d2ff';
priceElement.style.backgroundColor = 'orange';