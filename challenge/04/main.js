// ==========================================
// Step 4 課題: data-* 属性と forEach 繰り返し処理
// ==========================================

// 【問題1】HTML要素を取得しよう
// ・productName  : ID名 "#product-name" の要素を取得
// ・productPrice : ID名 "#product-price" の要素を取得
// ・colorBtns    : クラス名 ".color-btn" の要素を【すべて】取得（querySelectorAll を使用）

// ↓ ここから記述（3つの定数を定義してください）
const productName = document.querySelector('#product-name');
const productPrice = document.querySelector('#product-price');
const colorBtns = document.querySelectorAll('.color-btn');


// 【問題2】forEach を使って、すべてのボタンに一括でクリックイベントを設定しよう
// ① colorBtns.forEach(function (btn) { ... }) の構造を書きます
// ② 各ボタン（btn）がクリックされた時の処理を書きます：
//    ・productName.textContent  を btn.dataset.name  で書き換え
//    ・productPrice.textContent を btn.dataset.price で書き換え
//    ・productName.style.color  を btn.dataset.color で書き換え

// ↓ ここから記述