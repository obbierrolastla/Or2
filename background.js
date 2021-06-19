(function(){
	        console.log('domain : '+get_domain());
})();

function get_domain(){
	var the_url = '';
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		the_url = tabs[0].url;
	});
	if(the_url.match('https://')){
		the_url = the_url.replace('https://','');
	}else if(the_url.match('http://')){
		the_url = the_url.replace('http://','');
	}else{
		console.log('Protokol tidak terdaftar');
	}
	var domain = the_url.split('/')[0];

	return domain;
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
