function getDocWidth() {
    var D = document;
    return Math.max(
    Math.max(D.body.scrollWidth, D.documentElement.scrollWidth),
    Math.max(D.body.offsetWidth, D.documentElement.offsetWidth),
    Math.max(D.body.clientWidth, D.documentElement.clientWidth)
    );
}
function getDocHeight() {
    var D = document;
    return Math.max(
    Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
    Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
    Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}

var isFullScreen = false;
var orgDimensions = new Array();

function toggleFullScreen() {
    ifr = document.getElementById("iFrameWin");
    if (!isFullScreen) {
        orgDimensions[0] = ifr.style.width;
        orgDimensions[1] = ifr.style.height;
        ifr.style.width = getDocWidth() + "px";
        ifr.style.height = getDocHeight() + "px";
    }
    else {
        ifr.style.width = orgDimensions[0];
        ifr.style.height = orgDimensions[1];
    }
    isFullScreen = !isFullScreen;
}
