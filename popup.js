document.addEventListener('DOMContentLoaded', function() {
  const bg = chrome.extension.getBackgroundPage();
  if (bg.product == "mircron" || bg.product == "micron"){
    const button1 = document.getElementById('art_central');
    button1.addEventListener("click", openIndex1);
    const button2 = document.getElementById('target');
    button2.addEventListener("click", openIndex2);
    const button3 = document.getElementById('michaels');
    button3.addEventListener("click", openIndex3);
  }
  else if(bg.product == "acdc"){
    const button4 = document.getElementById('booboo');
    button4.addEventListener("click", openIndex);
  }
}, false);

function openIndex() {
  chrome.tabs.create({active: true, url: "https://booboorecords.com"});
}

function openIndex1() {
  chrome.tabs.create({active: true, url: "http://artcentralartsupply.com"});
}
function openIndex2() {
  chrome.tabs.create({active: true, url: "https://www.target.com/"});
}
function openIndex3() {
  chrome.tabs.create({active: true, url: "https://www.michaels.com/"});
}
