chrome.browserAction.onClicked.addListener(initializeScript);
chrome.tabs.onUpdated.addListener(runScript);
chrome.tabs.onActivated.addListener(runScript);

function initializeScript() {
  verifyTabs(setStateAndRunScript);
};

function runScript() {
  verifyTabs(triggerElmKillaScript);
};

function verifyTabs(callback) {
  chrome.tabs.query({ 'active': true }, function (tabs) {
    let url = tabs[0].url;
    if (url.includes("https://") || url.includes("http://")) {
      callback();
    }
  })
};

function triggerElmKillaScript() {
  chrome.tabs.executeScript(null, { file: "./elm-killa-script.js" });
};

function setStateAndRunScript() {
  setStatus(triggerElmKillaScript);
};

function setStatus(callback) {
  chrome.storage.local.get(["elmDebuggerVisible"], function(result) {
    result.elmDebuggerVisible ? setActiveIcon() : setInactiveIcon();
    chrome.storage.local.set({ "elmDebuggerVisible": !result.elmDebuggerVisible });
    callback();
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

