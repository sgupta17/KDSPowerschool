chrome.tabs.onUpdated.addListener(function(id, info, tab){
    var url = tab.url.toLowerCase();
    if (url.indexOf("powerschool.kentdenver.org") != -1){
      // chrome.pageAction.show(tcab.id);
      chrome.browserAction.enable(tab.id);
      chrome.browserAction.setIcon({
        path: {
          19: "icon19.png",
          38: 'icon38.png'
        },
        tabId: tab.id
      });


      chrome.tabs.executeScript(null, {"file": "jquery.min.js"});
        chrome.tabs.executeScript(null, {"file": "js.cookie.js"});
        chrome.tabs.executeScript(null, {"file": "allpages.js"});
        if(url.indexOf("home.html") != -1) {
          chrome.tabs.executeScript(null, {"file": "mainpage.js"});
        } else if(url.indexOf("scores") != -1 ) {
          chrome.tabs.executeScript(null, {"file": "extension.js"});
        }
    }
});
