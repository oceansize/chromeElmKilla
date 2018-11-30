function releaseTheKiller() {
  chrome.tabs.executeScript(null, { file: "./kill-elm-dead.js" });
};

chrome.browserAction.onClicked.addListener(releaseTheKiller);
