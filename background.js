// window.product = "expo";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const url = request.url;
  console.log(url);
  if(url.includes("Sakura")){
    window.product = "micron";
  }
  else if (url.includes("Black")){
    window.product = "acdc";
  }
  else{
    window.product = "";
  }
  chrome.commands.onCommand.addListener(function(command) {
      console.log('Command:', command);
    });
});
