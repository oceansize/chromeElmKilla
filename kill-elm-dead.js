function findVictims(){
  let potentialVictims = document.getElementsByTagName('div');
  let hurtLocker = Array.from(potentialVictims);
  let markedForDeath = hurtLocker.filter(obj => {
    return obj.style.bottom ==="0px" && obj.style.right ==="6px" && obj.style.position === "fixed";
  });
  return markedForDeath;
}

function toggleLife(status) {
  findVictims().forEach(obj => {
    obj.style.display = status;
  });
};

(function whoLivesWhoDies() {
  return chrome.storage.local.get(["crimeScene"], function(result) {
    toggleLife(result.crimeScene ? "block" : "none");
  });
})();

