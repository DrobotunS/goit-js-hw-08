import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const STOREGE_TIME_KEY = "videoplayer-current-time";

const onPlay = function(data) {
    console.log(data.seconds);
    localStorage.setItem(STOREGE_TIME_KEY, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));
  
player.setCurrentTime(localStorage.getItem(STOREGE_TIME_KEY));
    