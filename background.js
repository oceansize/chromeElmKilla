checkElmKillaStatus(setIcon);
chrome.browserAction.onClicked.addListener(toggleElmKilla);
chrome.tabs.onUpdated.addListener(tabUpdated);

function initializeScript() {
  verifyTabs(setStateAndRunScript);
};

function tabUpdated(tabID, changeInfo, tab) {
  let isTabReady = changeInfo.status === 'complete';

  checkElmKillaStatus((status) => {
    if (isTabReady && status) {
      runElmKilla(tab);
    }
  });
};

function setIcon(status) {
  status ? setActiveIcon() : setInactiveIcon();
};

function runElmKilla(tab) {
  if (tab.url.search(/https?:\/\//) === 0) {
    chrome.tabs.executeScript(tab.id, { file: "./elm-killa-script.js" });
  };
};

function toggleElmKilla() {
  checkElmKillaStatus((status) => {
    status = !status;
    chrome.storage.local.set({ "elmKillaActive": status });
    setIcon(status);
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        runElmKilla(tab);
      });
    });
  });
};

function checkElmKillaStatus(callback) {
  chrome.storage.local.get(["elmKillaActive"], function(result) {
    callback(result.elmKillaActive);
  });
}

function setInactiveIcon() {
  chrome.browserAction.setIcon({
    path : {
      "16": "images/elm-lives16.png",
      "32": "images/elm-lives32.png",
      "48": "images/elm-lives48.png",
      "128": "images/elm-lives128.png"
    }
  });
}

function setActiveIcon() {
  chrome.browserAction.setIcon({
    path : {
      "16": "images/elm-dies16.png",
      "32": "images/elm-dies32.png",
      "48": "images/elm-dies48.png",
      "128": "images/elm-dies128.png"
    }
  });
}

