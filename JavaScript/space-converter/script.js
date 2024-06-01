// 実行ボタンがクリックされたときのイベントリスナーを追加
document.getElementById('process-btn').addEventListener('click', () => {
  // 入力テキスト、スペースタイプ、スペース数を取得
  const inputText = document.getElementById('input-text').value;
  const spaceType = document.getElementById('space-type').value;
  const spaceCount = parseInt(document.getElementById('space-count').value);

  // スペースタイプに応じて半角スペースか全角スペースを選択
  const space = spaceType === 'half' ? ' ' : '　';

  // スペース数に応じてスペース文字列を生成
  const spaceString = space.repeat(spaceCount);

  // 入力テキストを行ごとに分割
  const lines = inputText.split('\n');

  // 各行の先頭にスペース文字列を追加
  const processedLines = lines.map(line => spaceString + line);

  // 処理済みの行を改行で結合して出力テキストに設定
  const processedText = processedLines.join('\n');
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
