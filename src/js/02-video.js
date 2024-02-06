import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');

const player = new Player(iframeEl);

const savedCurrentTime = localStorage.getItem('videoplayer-current-time');
setSavedCurrentTime();

const currentVideoTime = data => {
  console.log(data);
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(currentVideoTime, 1000));

function setSavedCurrentTime() {
  if (savedCurrentTime !== null) {
    player.setCurrentTime(savedCurrentTime);
    return;
  }
  localStorage.getItem('videoplayer-current-time', '0');
}

console.log(localStorage.getItem('videoplayer-current-time'));
