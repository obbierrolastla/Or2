(function(){
	        first_block();
})();

function get_domain(){
	var the_url = '';
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		the_url = tabs[0].url;
	});
	var domain = the_url.split('://')[1].split('/')[0];

	return domain;
}
function redirect_to(desire_url){
        chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},function(tabs){
                chrome.tabs.update(tabs[0].id,{url:desire_url});
                console.log('redirect to'+desire_url);
        });
}
function first_block(){
	var callback = function(details){
		return {redirectUrl: "https://google.com"};
	};
	var filter = {urls:["*://youtube.com/*"]};
	var extra_opt = ["blocking"];
	chrome.webRequest.onBeforeRequest.addListener(
	callback, filter, extra_opt);
}
