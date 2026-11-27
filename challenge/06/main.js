// ==========================================
// Step 6 課題: 総合演習 ハンバーガーメニュー
// ==========================================

// 【問題1】表示制御に必要なHTML要素を取得しよう
// ・hamburgerBtn : ID名 "#hamburger-btn" のボタン要素
// ・navMenu      : ID名 "#nav-menu" のナビ画面要素
// ・navItems     : クラス名 ".nav-item" のメニュー項目を【すべて】取得（querySelectorAll）

// ↓ ここから記述（3つの定数を定義してください）
const hamburgerBtn = document.querySelector('#hamburger-btn');
const navMenu = document.querySelector('#nav-menu');
const navItems = document.querySelectorAll('.nav-item');




// 【問題2】ハンバーガーボタン（hamburgerBtn）がクリックされた時の「開閉処理（if）」を作成しましょう。
//
// 1. まず、hamburgerBtn と navMenu の両方のクラスに "is-active" をトグル（つけ外し）してください。
//
// 2. 続いて if 文を使い、ナビの開閉状態（is-active がついているか）で処理を分岐させます。
//
//   -------------------------------------------------------------------
//   ■ A. ナビが開いた時（if: is-active クラスが含まれている場合）
//   -------------------------------------------------------------------
//     ① メニュー背景（navMenu）のアニメーション設定
//       ・第1引数（キーフレーム）: 開始 0% ➔ 不透明度 0、Y軸 -20px / 完了 100% ➔ 不透明度 1、Y軸 0
//       ・第2引数（オプション）  : 再生時間 300ms、イージング "ease-out"、fill "both"
//
//     ② メニュー項目（navItems）の時差アニメーション設定
//       navItems を forEach で回し、各項目を下から順に時間差でフェードスライドインさせます。
//       ※ forEach の引数には (item, index) のように【2つの引数】を設定してください。
//         （理由: 各項目の遅延時間 delay を計算するために、インデックス番号 index が必要なため）
//
//       ・第1引数（キーフレーム）: 開始 0% ➔ 不透明度 0、Y軸 25px / 完了 100% ➔ 不透明度 1、Y軸 0
//       ・第2引数（オプション）  : 再生時間 400ms、イージング "ease-out"、遅延時間 (index * 100 + 150)、fill "both"
//         （※ fill に "both" を指定することで、遅延時間中のチラつきを防ぎつつ完了後の表示も保持されます）
//
//   -------------------------------------------------------------------
//   ■ B. ナビが閉じた時（else: is-active クラスが外れた場合）※今回は書かなくてOK!
//   -------------------------------------------------------------------
//     ※ トグル操作により "is-active" クラスが外れるため、CSSの display: none によって自動的に非表示になります。

// ↓ ここから記述


hamburgerBtn.addEventListener('click', function () {
  // 1. まず、hamburgerBtn と navMenu の両方のクラスに "is-active" をトグル（つけ外し）してください。
  hamburgerBtn.classList.toggle('is-active');
  navMenu.classList.toggle('is-active');

  // 2. 続いて if 文を使い、ナビの開閉状態（is-active がついているか）で処理を分岐させます。
  if (navMenu.classList.contains('is-active')) {
    navMenu.animate(
      [
        // 0%
        {
          opacity: 0,
          transform: 'translateY(-20px)',
        },
        // 100%
        {
          opacity: 1,
          transform: 'translateY(0)',
        }
      ],
      {
        duration: 300,
        easing: 'ease-out',
        fill: 'both', // 開始前(backwards)と完了後(forwards)のスタイルを両方(both)ともキープする
      }
    );

    navItems.forEach(function (item, index) {
      item.animate(
        [
          // 0%
          {
            opacity: 0,
            transform: 'translateY(25px)',
          },
          // 100%
          {
            opacity: 1,
            transform: 'translateY(0)',
          }
        ],
        {
          duration: 400,
          easing: 'ease-out',
          fill: 'both',
          delay: index * 100 + 150,
        }
      );
    });

    //     ② メニュー項目（navItems）の時差アニメーション設定
    //       navItems を forEach で回し、各項目を下から順に時間差でフェードスライドインさせます。
    //       ※ forEach の引数には (item, index) のように【2つの引数】を設定してください。
    //         （理由: 各項目の遅延時間 delay を計算するために、インデックス番号 index が必要なため）
    //
    //       ・第1引数（キーフレーム）: 開始 0% ➔ 不透明度 0、Y軸 25px / 完了 100% ➔ 不透明度 1、Y軸 0
    //       ・第2引数（オプション）  : 再生時間 400ms、イージング "ease-out"、遅延時間 (index * 100 + 150)、fill "both"
    //         （※ fill に "both" を指定することで、遅延時間中のチラつきを防ぎつつ完了後の表示も保持されます）
    //
    //   
  }
});