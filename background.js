'use strict';
// extension will need information from a persistent variable as soon as its installed
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
  });
  // declared rules to the background script
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            //pageUrl: {hostEquals: 'developer.chrome.com'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
  });
});
