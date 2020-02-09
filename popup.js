document.addEventListener('DOMContentLoaded', function() {
  const bg = chrome.extension.getBackgroundPage();
  const div = document.createElement('div');
  if (bg.product == "expo"){
     var myDiv = document.getElementById('banner');
     banner.style.display = 'none';
    div.textContent = "www.target.com/expo";
    document.body.appendChild(div);
  }
  else if(bg.product == "cello"){
    div.textContent = "www.target.com/cello";
    document.body.appendChild(div);
  }
  else{
    div.textContent = "";
    document.body.appendChild(div);
  }
}, false);
