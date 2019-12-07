chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({}, function(tabs) {
        alert("You have " + tabs.length + " tabs open");
    });
});
