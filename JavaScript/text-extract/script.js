document.getElementById('process-btn').addEventListener('click', () => {
  const inputText = document.getElementById('input-text').value;
  const searchText = document.getElementById('search-text').value;

  const lines = inputText.split('\n');
  const filteredLines = lines.filter(line => line.includes(searchText));
  const processedText = filteredLines.join('\n');
  
  document.getElementById('output-text').value = processedText;
});

document.getElementById('copy-btn').addEventListener('click', () => {
  const outputText = document.getElementById('output-text');
  outputText.select();
  document.execCommand('copy');
  alert('出力テキストをクリップボードにコピーしました');
});
