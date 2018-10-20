sendHeight();

function sendHeight(){
    var h = document.documentElement.scrollHeight;
    parent.postMessage(h, "*");
}