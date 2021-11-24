
const player = document.getElementById('audio');
const button = document.getElementById('musica');
function play() {
    player.play()
}
 function pause() {
    player.pause();
 }
  button.addEventListener('click', function(){
         if(player.paused){
             play();
         }else{pause();}
});
 




