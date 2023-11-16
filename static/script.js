// 関数 detectLines の定義
function detectLines() {
  // ステータスバーを表示するコード
  document.getElementById('statusBar').style.display = 'block';

  // 非同期処理を開始するコード
  setTimeout(function() {
    // テキストエリアの値を取得するコード
    var text = document.getElementById('sequenceA').value;
    // キーワードを取得するコード
    var keywords = Array.from(document.getElementsByName('sequenceB')).map(el => el.value);
    // テキストを行に分割するコード
    var lines = text.split('\n');
    // キーワードが含まれる行を抽出するコード
    var matchingLines = lines.filter(line => keywords.some(keyword => line.includes(keyword)));
    // マッチした行をハイライトするコード
    var highlightedLines = matchingLines.map(line => {
      // ハイライトする行を定義するコード
      var highlightedLine = line;
      // キーワードをハイライトするコード
      keywords.forEach(keyword => {
        // ハイライトするキーワードを定義するコード
        var highlightedKeyword = '<span style="background-color: #FBB161;">' + keyword + '</span>';
        // ハイライトするキーワードを行に適用するコード
        highlightedLine = highlightedLine.replace(new RegExp(keyword, 'g'), highlightedKeyword);
      });
      // ハイライトした行を返すコード
      return highlightedLine;
    });
    // 結果を表示するコード
    document.getElementById('results').innerHTML = highlightedLines.join('\n');
    // ステータスバーを非表示にするコード
    document.getElementById('statusBar').style.display = 'none';
  }, 0); // 0ミリ秒後に関数を実行するコード
  // falseを返すコード
  return false;
}

// 関数 addKeywordField の定義
function addKeywordField() {
  // キーワードのdivを取得するコード
  var keywordsDiv = document.getElementById('keywords'); 
  // 新しいtextarea要素を作成するコード
  var newKeywordField = document.createElement('textarea'); 
  // 新しい要素の名前を設定するコード
  newKeywordField.name = 'sequenceB'; 
  // 新しい要素の行数を設定するコード
  newKeywordField.rows = '1';
  // 新しい要素のプレースホルダーを設定するコード
  newKeywordField.placeholder = '検出したいキーワードを入力してください。'; 
  // 新しい要素をdivに追加するコード
  keywordsDiv.appendChild(newKeywordField); 
}

