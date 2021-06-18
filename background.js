chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
	let url = tabs[0].url;
	var domain = get_domain(url);
	console.log(domain);
	if(domain.match('youtube.com')){
		redirect_to('https://google.com');
	}
	
});
function get_domain(url){
	var the_url = '';
	if(url.match('https://')){
		the_url = url.replace('https://','');
	}else if(url.match('http://')){
		the_url = url.replace('http://','');
	}else{
		console.log('Protokol tidak terdaftar');
	}
	var domain = the_url.split('/')[0];
	return domain;
}
function redirect_to(url){
	console.log('redirect to '+url);
}
