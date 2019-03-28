function locateElementsToHide(){
  let elmDebuggerWindows = document.querySelectorAll("[data-elm-hot]");
  return Array.from(elmDebuggerWindows);
}

function toggleVisibility(status) {
  locateElementsToHide().forEach(obj => {
    obj.style.display = status;
  });
};

(function applyStyles() {
  return chrome.storage.local.get(["elmKillaActive"], function(result) {
    toggleVisibility(result.elmKillaActive ? "none" : "block");
  });
})();

