function detectLines() {
  // ステータスバーを表示
  document.getElementById('statusBar').style.display = 'block';

  // 非同期処理を開始
  setTimeout(function() {
    var text = document.getElementById('sequenceA').value;
    var keywords = Array.from(document.getElementsByName('sequenceB')).map(el => el.value);
    var lines = text.split('\n');
    var matchingLines = lines.filter(line => keywords.some(keyword => line.includes(keyword)));
    var highlightedLines = matchingLines.map(line => {
      var highlightedLine = line;
      keywords.forEach(keyword => {
        var highlightedKeyword = '<span style="background-color: #FBB161;">' + keyword + '</span>';
        highlightedLine = highlightedLine.replace(new RegExp(keyword, 'g'), highlightedKeyword);
      });
      return highlightedLine;
    });
    document.getElementById('results').innerHTML = highlightedLines.join('\n');
    // ステータスバーを非表示にする
    document.getElementById('statusBar').style.display = 'none';
  }, 0); // 0ミリ秒後に関数を実行
  return false;
}

// 新しいキーワードフィールドを追加する関数
function addKeywordField() {
  // キーワードのdivを取得
  var keywordsDiv = document.getElementById('keywords'); 
  // 新しいtextarea要素を作成
  var newKeywordField = document.createElement('textarea'); 
  // 新しい要素の名前を設定
  newKeywordField.name = 'sequenceB'; 
   // 新しい要素の行数を設定
  newKeywordField.rows = '1';
  // 新しい要素のプレースホルダーを設定
  newKeywordField.placeholder = '検出したいキーワードを入力してください。'; 
  // 新しい要素をdivに追加
  keywordsDiv.appendChild(newKeywordField); 
}

