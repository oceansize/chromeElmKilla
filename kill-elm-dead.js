(function findElmAndKillItDead() {
  let potentialVictims = document.getElementsByTagName('div');
  let elmDebuggerDivs = Array.from(potentialVictims);
  let futureVictims = elmDebuggerDivs.filter(obj => {
    return obj.innerText.match(/^Explore History \(/g) !== null;
  });
  let markedForDeath = futureVictims.filter(obj => {
    return obj.style.bottom ==="0px" && obj.style.right ==="6px" && obj.style.position === "fixed";
  });
  markedForDeath.forEach(obj => {
    obj.style.display = "none";
  });
})()
