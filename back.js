var count='?!';

chrome.browserAction.setBadgeText({text: "?"});
chrome.browserAction.setBadgeBackgroundColor({color:"red"})
	
window.onload = function() {
	getResponse();
	chrome.browserAction.setBadgeText({text: count});
};

window.setInterval( function() {
	getResponse();
	chrome.browserAction.setBadgeText({text: count});
	
}, 60000);



       

