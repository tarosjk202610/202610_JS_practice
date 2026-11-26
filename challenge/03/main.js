// ==========================================
// Step 3 課題: 関数と引数・戻り値
// ==========================================

// 【問題1】HTML要素を取得して定数（const）に代入しよう
// ・basePriceEl : ID名 "#base-price" の要素を取得（本体価格）
// ・taxPriceEl  : ID名 "#tax-price" の要素を取得（税込価格表示用）
// ・calcBtn     : ID名 "#calc-btn" の要素を取得（計算ボタン）

// ↓ ここから記述（querySelector を使って3つの要素を取得）
const basePriceEl = document.querySelector('#base-price');
const taxPriceEl = document.querySelector('#tax-price');
const calcBtn = document.querySelector('#calc-btn');


// 【問題2】本体価格（数値）を受け取り、消費税（10%）を加算した計算結果を返す関数を作成しよう
// ・関数名: getTaxIncludedPrice
// ・引数  : price
// ・処理  : price * 1.1 の計算結果を Math.floor() で端数切り捨てして return（返却）する

// ↓ ここから記述
function getTaxIncludedPrice(price){
  return Math.floor(price * 1.1);
}


// 【問題3】「計算ボタン（calcBtn）」をクリックした時の処理を書こう
// ① basePriceEl のテキスト（文字列）を取得し、Number() で数値に変換しよう
// ② 作成した関数 getTaxIncludedPrice() を呼び出して税込価格を計算しよう
// ③ 計算結果を taxPriceEl の textContent にセットしよう
// ※ 必要であれば自由に定数・変数を自作してもOKです

// ↓ ここから記述
calcBtn.addEventListener('click', function(){
  taxPriceEl.textContent = getTaxIncludedPrice( Number(basePriceEl.textContent) );
});