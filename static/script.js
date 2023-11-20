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

// 関数 toggleDetailSettings の定義
function toggleDetailSettings() {
  // 詳細設定のdivを取得するコード
  var detailSettingsDiv = document.getElementById('detailSettings'); 
  // divの現在の表示状態を取得するコード
  var currentDisplay = detailSettingsDiv.style.display;
  // 表示状態を切り替えるコード
  detailSettingsDiv.style.display = currentDisplay === 'none' ? 'block' : 'none';
}

// 関数 detectLinesWithRange の定義
function detectLinesWithRange() {
  // beforeLinesとafterLinesの値を取得するコード
  var beforeLines = parseInt(document.getElementById('beforeLines').value);
  var afterLines = parseInt(document.getElementById('afterLines').value);
  
  // テキストエリアの値を取得するコード
  var text = document.getElementById('sequenceA').value;
  // キーワードを取得するコード
  var keywords = Array.from(document.getElementsByName('sequenceB')).map(el => el.value);
  // テキストを行に分割するコード
  var lines = text.split('\n');
  
  // キーワードが含まれる行を抽出するコード
  var matchingLinesIndexes = [];
  // 各行に対して処理を行うコード
  lines.forEach((line, index) => {
    // キーワードが行に含まれているかどうかをチェックするコード
    if (keywords.some(keyword => line.includes(keyword))) {
      // キーワードが含まれている行のインデックスを配列に追加するコード
      matchingLinesIndexes.push(index);
    }
  });
  
  // 追加機能のコード
  var extendedLinesIndexes = [];
  // マッチング行インデックスの各インデックスに対して処理を行う
  matchingLinesIndexes.forEach(index => {
    // 開始インデックスと終了インデックスを計算
    var start = Math.max(0, index - beforeLines);
    var end = Math.min(lines.length, index + afterLines + 1);
    // 開始インデックスから終了インデックスまでの各インデックスに対して処理を行う
    for (var i = start; i < end; i++) {
      // 拡張行インデックスに現在のインデックスが含まれていない場合、そのインデックスを追加
      if (!extendedLinesIndexes.includes(i)) {
        extendedLinesIndexes.unshift(i);
      }
    }
  });
  
  // 結果を表示するコード
  // 拡張行インデックスをソートし、各インデックスに対応する行を取得する
  var resultLines = extendedLinesIndexes.sort((a, b) => a - b).map(index => {
    var line = lines[index];
    // 各キーワードに対して処理を行う
    keywords.forEach(keyword => {
      // キーワードをハイライトするためのHTMLタグを作成
      var highlightedKeyword = '<span style="background-color: #FBB161;">' + keyword + '</span>';
      // 行内のキーワードをハイライトする
      line = line.replace(new RegExp(keyword, 'g'), highlightedKeyword);
    });
    // ハイライトされた行を返す
    return line;
  });
  // 結果をHTMLに表示する
  document.getElementById('results').innerHTML = resultLines.join('\n');
  
  // ステータスバーを非表示にするコード
  document.getElementById('statusBar').style.display = 'none';
}
