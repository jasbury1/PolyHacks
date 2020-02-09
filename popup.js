document.addEventListener('DOMContentLoaded', function() {
  const bg = chrome.extension.getBackgroundPage();
  const div = document.createElement('div');
  if (bg.product == "expo"){
    div.textContent = "www.target.com/expo";
    document.body.appendChild(div);
  }
  else if(bg.product == "cello"){
    div.textContent = "www.target.com/cello";
    document.body.appendChild(div);
  }
}, false);
