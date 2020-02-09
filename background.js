// window.product = "expo";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const url = request.url;
  console.log(url);
  if(url.includes("expo")){
    window.product = "expo";
  }
  else if (url.includes("cello")){
    window.product = "cello";
  }
  else{
    window.product = "";
  }
  chrome.commands.onCommand.addListener(function(command) {
      console.log('Command:', command);
    });
});
