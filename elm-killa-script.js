function locateElementsToHide(){
  let getAllDivs = document.getElementsByTagName('div');
  let arrayOfDivs = Array.from(getAllDivs);
  let elmDebuggerDivs = arrayOfDivs.filter(obj => {
    return obj.style.bottom ==="0px" && obj.style.right ==="6px" && obj.style.position === "fixed";
  });
  return elmDebuggerDivs;
}

function toggleVisibility(status) {
  locateElementsToHide().forEach(obj => {
    obj.style.display = status;
  });
};

(function applyStyles() {
  return chrome.storage.local.get(["elmDebuggerVisible"], function(result) {
    toggleVisibility(result.elmDebuggerVisible ? "block" : "none");
  });
})();

