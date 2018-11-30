function releaseTheKiller() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { file: "./kill-elm-dead.js" });
  });
};

document.getElementById('changeColor').addEventListener('click', releaseTheKiller);
