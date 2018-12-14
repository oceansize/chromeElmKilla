chrome.browserAction.onClicked.addListener(callTheKiller);
chrome.tabs.onUpdated.addListener(callTheKillerBack);
chrome.tabs.onActivated.addListener(callTheKillerBack);

function callTheKiller() {
  checkCommunityAndTerrorize(releaseTheKillerAndWarnTheTown);
};

function callTheKillerBack() {
  checkCommunityAndTerrorize(releaseTheKiller);
};

function checkCommunityAndTerrorize(callback) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    let url = tabs[0].url;
    if (url.includes("https://") || url.includes("http://")) {
      callback();
    }
  })
};

function validateUrl() {
  var url = getTabUrl();
};

function releaseTheKiller() {
  chrome.tabs.executeScript(null, { file: "./kill-elm-dead.js" });
};

function releaseTheKillerAndWarnTheTown() {
  chrome.storage.local.get(["crimeScene"], function(result) {
    result.crimeScene ? coverItUp() : warnTheTown();
    chrome.storage.local.set({ "crimeScene": !result.crimeScene });
    releaseTheKiller();
  });
};

function warnTheTown() {
  chrome.browserAction.setIcon({
    path : {
      "16": "images/elm-lives16.png",
      "32": "images/elm-lives32.png",
      "48": "images/elm-lives48.png",
      "128": "images/elm-lives128.png"
    }
  });
}

function coverItUp() {
  chrome.browserAction.setIcon({
    path : {
      "16": "images/elm-dies16.png",
      "32": "images/elm-dies32.png",
      "48": "images/elm-dies48.png",
      "128": "images/elm-dies128.png"
    }
  });
}

