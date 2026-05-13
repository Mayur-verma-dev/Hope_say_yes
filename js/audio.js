// js/audio.js - try to start background audio on load and fall back to user gesture when autoplay is blocked
(function(){
  const audio = document.querySelector('audio#backgroundAudio') || document.querySelector('audio');
  if(!audio) return;

  function playAudio(){
    if(audio.paused){
      audio.play().catch(() => {});
    }
  }

  document.addEventListener('DOMContentLoaded', playAudio);

  ['click','touchstart','pointerdown','keydown'].forEach(eventName => {
    window.addEventListener(eventName, function(){
      playAudio();
    }, {once:true, passive:true});
  });
})();
