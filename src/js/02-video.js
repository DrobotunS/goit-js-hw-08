import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

let localStorageKey = "videoplayer-current-time";


// const onPlay = function(data) {

//     localstorage.setItem(localStorageTime, data.seconds)
// };
// player.on('timeupdate', onPlay);

// const sevDataSec = localStorage.getItem(localStorageTime);
// console.log(sevDataSec)
player.on('timeupdate', function(data) {
        console.log(data.seconds)
        localstorage.setItem("videoplayer-current-time", data.seconds)
    });
    



player.setCurrentTime(localStorageTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            on
            break;

        default:
      
            break;
    }
});