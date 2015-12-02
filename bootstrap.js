chrome.tabs.onUpdated.addListener(function(id, info, tab){
    var url = tab.url.toLowerCase();
    if (url.indexOf("powerschool.kentdenver.org") != -1){
      // chrome.pageAction.show(tcab.id);
      chrome.browserAction.enable(tab.id);
      // chrome.browserAction.setIcon({"tabId":tab.id});
      chrome.browserAction.setIcon({path: {"19": "icon.png", "38": "icon.png"}, "tabId": tab.id});

      // var opt = {
      //   type: "basic",
      //   title: "Version 3.3.4",
      //   message: "Click on icon (top right corner) to see current day schedule.\nTriple click on footer for a surprise!",
      //   iconUrl: "icon.png"
      // }

      var notifcationID = "KDSNotification";

      var opt = {
        type: "list",
        title: "Version 3.3.4",
        message: "IDK",
        iconUrl: "icon.png",
        items:
          [{ title: "1.", message: "Click on icon to see day schedule."},
          { title: "2.", message: "Find the Easter Egg."}]
      }

      chrome.notifications.create(notifcationID, opt);

      // chrome.notifications.onClicked.addListener(function(notifcationID) {
      //   window.open("https://chrome.google.com/webstore/detail/kent-powerschool-percenta/pcgihmofdilgbglclfjiadhphijcfhej?hl=en", '_blank');
      // });

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
