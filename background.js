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
});

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.tabs.query({"active": true, "currentWindow": true}, function (tabs) {
//     url= tabs[0].url;
//
//     if(url.includes("expo")){
//       window.product = "expo";
//     }
//     else if (url.includes("cello")){
//       window.product = "cello";
//     }
//   });
// })
