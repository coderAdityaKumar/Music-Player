const audioplayer = document.querySelector("#audioPlayer");
const slider = document.querySelector("#slider");
const playButton = document.querySelector(".playbtn");
const play_pause_image=document.querySelector(".target")
const timer=document.querySelector('.timer');
const minutes=document.querySelector('.minutes');
const second=document.querySelector('.second');
;

playButton.addEventListener("click", function () {
    slider.setAttribute('max',`${audioplayer.duration}`);
  if (audioplayer.paused) {
    audioplayer.play();
    play_pause_image.classList.remove("fa-play");
    play_pause_image.classList.add("fa-pause");
  } else {
    audioplayer.pause();
    play_pause_image.classList.remove("fa-pause");
    play_pause_image.classList.add("fa-play");
  }
});

audioplayer.addEventListener('timeupdate',function(){
    slider.value=audioplayer.currentTime;
    if(Math.floor((Math.floor(audioplayer.duration-audioplayer.currentTime))/60)<10 ){
      minutes.innerHTML=`0${Math.floor((Math.floor(audioplayer.duration-audioplayer.currentTime))/60)}m`;
    }else{
      minutes.innerHTML=`${Math.floor((Math.floor(audioplayer.duration-audioplayer.currentTime))/60)}m`;
    }

    if((60-Math.floor(audioplayer.currentTime % 60))<10){
      second.innerHTML = `0${(60-Math.floor(audioplayer.currentTime % 60))}s`;
    }else{
      second.innerHTML = `${(60-Math.floor(audioplayer.currentTime % 60))}s`;
    }
    
    
});

slider.addEventListener('input',function(){
    audioplayer.currentTime=slider.value;
});

audioplayer.addEventListener('ended',function(){
    play_pause_image.classList.remove("fa-pause");
    play_pause_image.classList.add("fa-play");
})
