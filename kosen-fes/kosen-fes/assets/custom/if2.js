window.addEventListener('message', function(e) {
    if(e.origin=="http://rwd-book.info"){
        document.getElementById('content-frame').height = e.data;
    }
}, false);