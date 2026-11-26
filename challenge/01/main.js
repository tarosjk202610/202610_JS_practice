// ==========================================
// Step 1 課題: DOM取得とテキスト書き換え
// ==========================================

// 【問題1】HTML要素を取得して定数（const）に代入しよう
// ・message : ID名 "#message" の要素を取得
// ・btnJp   : ID名 "#btn-jp" の要素を取得
// ・btnEn   : ID名 "#btn-en" の要素を取得

// ↓ ここから記述（document.querySelector を使って3つの要素を取得してください）
const message = document.querySelector('#message');
const btnJp = document.querySelector('#btn-jp');
const btnEn = document.querySelector('#btn-en');

// 【問題2】「日本語にする」ボタン（btnJp）をクリックした時、メッセージを「こんにちは！」に変えよう
// ヒント: btnJp.addEventListener("click", function () { ... }) を使い、
//         message.textContent を書き換えます

// ↓ ここから記述
btnJp.addEventListener('click', function(){
  message.textContent = 'こんにちは！';
});


// 【問題3】「英語にする」ボタン（btnEn）をクリックした時、メッセージを「Hello!」に変えよう

// ↓ ここから記述
btnEn.addEventListener('click', function(){
  message.textContent = 'Hello!';
});
