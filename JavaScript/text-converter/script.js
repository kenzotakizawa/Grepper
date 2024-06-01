// 実行ボタンがクリックされたときのイベントリスナーを追加
document.getElementById('process-btn').addEventListener('click', () => {
  // 入力テキストを取得
  const inputText = document.getElementById('input-text').value;

  // 入力テキスト内の「。」の後に改行がなければ改行を挿入
  const processedText = inputText.replace(/。(?!\n)/g, '。\n');

  // 処理後のテキストを出力テキストフィールドに設定
  document.getElementById('output-text').value = processedText;
});

// コピーボタンがクリックされたときのイベントリスナーを追加
document.getElementById('copy-btn').addEventListener('click', () => {
  // 出力テキストフィールドを選択
  const outputText = document.getElementById('output-text');
  outputText.select();

  // 選択したテキストをクリップボードにコピー
  document.execCommand('copy');

  // コピー成功のアラートを表示
  alert('出力テキストをクリップボードにコピーしました');
});

