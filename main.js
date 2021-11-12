
var videoNode = document.querySelector('#video');
var videotag = videoNode.getElementsByTagName('video');
var sourceVideo = videoNode.getElementsByTagName('source')

var defaultVideo = videoNode.lastElementChild.src;
defaultVideo = 'https://siasky.net/AAAe_ifd8iWaCevMesvI9xWqvcOpsM09KWWnCXWkjU_hog'
console.dir(videoNode.lastElementChild.src, videotag, sourceVideo);


