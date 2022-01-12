let tag = document.createElement('script');

const playerBtn = document.getElementById('playerBtn');
const videoCover = document.querySelector('.author__videoCover');
playerBtn.addEventListener('click', playVideo);




tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'LNkK39xsQe4',
    autoplay:0,
  });
}


function onPlayerReady(event) {
  event.target.playVideo();
}

function playVideo(){
  playerBtn.classList.add('opacityEffect');
  videoCover.classList.add('opacityEffect');
  player.playVideo();
}

function stopVideo() {
  player.stopVideo();
}


