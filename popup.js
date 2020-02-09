document.addEventListener('DOMContentLoaded', function() {
  const bg = chrome.extension.getBackgroundPage();
  const div = document.createElement('div');
     var acdc = document.getElementById('acdc');
     var micron = document.getElementById('micron');
  if (bg.product == "acdc"){
     micron.style.display = 'none';
  }
  else if(bg.product == "micron"){
     acdc.style.display = 'none';
  }
  else{
    div.textContent = "";
    document.body.appendChild(div);
  }
}, false);
