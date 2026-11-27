// ==========================================
// Step 5 課題: オブジェクトと配列のデータ読み出し
// ==========================================

// 【商品データ（オブジェクトと配列の組み合わせ）】
const productData = {
  name: "ワイヤレスヘッドホン AURORA",
  price: 12800,
  category: "RECOMMEND",
  tags: ["送料無料", "ノイズキャンセリング"]
};


// 【問題1】表示を更新するHTML要素を取得しよう
// ・badgeEl : ID名 "#product-badge" の要素
// ・titleEl : ID名 "#product-title" の要素
// ・priceEl : ID名 "#product-price" の要素
// ・tag1El  : ID名 "#tag-1" の要素
// ・tag2El  : ID名 "#tag-2" の要素
// ・loadBtn : ID名 "#load-btn" のボタン要素

// ↓ ここから記述（6つの定数を定義してください）
const badgeEl = document.querySelector('#product-badge');
const titleEl = document.querySelector('#product-title');
const priceEl = document.querySelector('#product-price');
const tag1El = document.querySelector('#tag-1');
const tag2El = document.querySelector('#tag-2');
const loadBtn = document.querySelector('#load-btn');


// 【問題2】「読み込みボタン（loadBtn）」をクリックした時の処理を書こう
// productData オブジェクトからデータを取り出し、HTMLに反映させよう：
// ① badgeEl の textContent ➡️ productData.category
// ② titleEl の textContent ➡️ productData.name
// ③ priceEl の textContent ➡️ productData.price
// ④ tag1El  の textContent ➡️ productData.tags の 1つ目の要素（インデックス 0）
// ⑤ tag2El  の textContent ➡️ productData.tags の 2つ目の要素（インデックス 1）

// ↓ ここから記述

loadBtn.addEventListener('click', function(){
  badgeEl.textContent = productData.category;
  titleEl.textContent = productData.name;
  priceEl.textContent = productData.price;
  tag1El.textContent = productData.tags;
});