import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const KEY = "videoplayer-current-time";
let data = {};


const player = new Player(iframe);
player.on('play', function() {
    console.log('start!');
});

player.on('timeupdate', throttle(setItemToLocalStorage, 1000));

function setItemToLocalStorage (data) {
    console.log("Записані дані:", data);
    const dataJson = JSON.stringify(data);
    console.log("json дані:", dataJson);
    localStorage.setItem(KEY, dataJson);
}

//player.setCurrentTime(number)