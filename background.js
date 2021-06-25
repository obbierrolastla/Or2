(function(){
        console.log('3 : '+get_domain());
})();
function get_data(ID){
        var url = 'https://localhost/or2.php?ID='+ID.toString();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                            console.log(xhttp.responseText);
                            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
}
function get_domain(){
        let the_url = 'https://contoh.com/';
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
                the_url =  tabs[0].url;
                console.log('1 : '+the_url);
        });

        the_url = the_url.split('://')[1].split('/')[0];
        console.log('2 : '+the_url);

        return  the_url;
}
function redirect_to(desire_url){
        chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},function(tabs){
                chrome.tabs.update(tabs[0].id,{url:desire_url});
                console.log('redirect to : '+desire_url);
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
