// ==========================================
// Step 2 課題: クラス操作と条件分岐
// ==========================================

// 【問題1】HTML要素を取得して定数（const）に代入しよう
// ・card       : ID名 "#card" の要素を取得
// ・statusText : ID名 "#status-text" の要素を取得
// ・toggleBtn  : ID名 "#toggle-btn" の要素を取得

// ↓ ここから記述（querySelector を使って3つの要素を取得してください）
const card = document.querySelector('#card');
const statusText = document.querySelector('#status-text');
const toggleBtn = document.querySelector('#toggle-btn');


// 【問題2】「切り替えボタン（toggleBtn）」をクリックした時の処理を書こう
// ① card 要素のクラスに "is-dark" をつけ外し（toggle）しよう
// ② if 文（または classList.contains）を使って状況を判定し、表示文字を切り替えよう：
//    - "is-dark" クラスがついている時：
//        statusText ➡️ "現在はダークモードです"
//        toggleBtn  ➡️ "ライトモードに切り替える"
//    - ついていない時（else）：
//        statusText ➡️ "現在はライトモードです"
//        toggleBtn  ➡️ "ダークモードに切り替える"

// ↓ ここから記述
toggleBtn.addEventListener('click', function(){

  card.classList.toggle('is-dark');

});