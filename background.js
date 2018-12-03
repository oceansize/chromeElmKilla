function releaseTheKiller() {
  chrome.tabs.executeScript(null, { file: "./kill-elm-dead.js" });
};

chrome.browserAction.onClicked.addListener(releaseTheKiller);
chrome.storage.local.set({ crimeScene: false });
chrome.browserAction.onClicked.addListener(toggleIcon);

function toggleIcon() {
  return chrome.storage.local.get(["crimeScene"], function(result) {
    result.crimeScene ? switchIconOn() : switchIconOff();
  })
};

function switchIconOn() {
  chrome.browserAction.setIcon({
    path : {
      "16": "images/elm-lives16.png",
      "32": "images/elm-lives32.png",
      "48": "images/elm-lives48.png",
      "128": "images/elm-lives128.png"
    }
  });
}

function switchIconOff() {
  chrome.browserAction.setIcon({
    path : {
      "16": "images/elm-dies16.png",
      "32": "images/elm-dies32.png",
      "48": "images/elm-dies48.png",
      "128": "images/elm-dies128.png"
    }
  });
}

