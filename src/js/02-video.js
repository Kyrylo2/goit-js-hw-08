import '../css/common.css';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

player.on('timeupdate', throttle(setCurrentVideoTime, 1000));

function setCurrentVideoTime({ seconds, duration }) {
  if (seconds > duration - 3) return localStorage.clear();

  localStorage.setItem('videoplayer-current-time', seconds);
}
