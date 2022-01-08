let tag = document.createElement('script');

const playerBtn = document.getElementById('playerBtn');
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
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}


function onPlayerReady(event) {
  event.target.playVideo();
}

function playVideo(){
  player.playVideo();
  playerBtn.classList.add('playerBtnEffect');
}

let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}