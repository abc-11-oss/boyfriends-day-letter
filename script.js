const intro=document.getElementById('intro');
const letterSection=document.getElementById('letterSection');
const openLetter=document.getElementById('openLetter');
const song=document.getElementById('bgSong');
const musicButton=document.getElementById('musicButton');
const musicBar=document.querySelector('.music-bar');
let opened=false;
async function openTheLetter(){
 if(opened)return;
 opened=true;
 document.body.classList.add('open');
 letterSection.setAttribute('aria-hidden','false');
 song.currentTime=0;
 try{await song.play();}catch(e){}
 setTimeout(()=>letterSection.scrollIntoView({behavior:'smooth',block:'start'}),120);
}
openLetter.addEventListener('click',openTheLetter);
openLetter.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ') {e.preventDefault();openTheLetter()}});
musicButton.addEventListener('click',async()=>{
 if(song.paused){try{await song.play();}catch(e){} musicBar.classList.remove('paused');musicButton.innerHTML='Ⅱ';musicButton.setAttribute('aria-label','Pause music')}
 else{song.pause();musicBar.classList.add('paused');musicButton.innerHTML='▶';musicButton.setAttribute('aria-label','Play music')}
});
song.addEventListener('play',()=>{musicBar.classList.remove('paused');musicButton.innerHTML='Ⅱ';musicButton.setAttribute('aria-label','Pause music')});
song.addEventListener('pause',()=>{musicBar.classList.add('paused');musicButton.innerHTML='▶';musicButton.setAttribute('aria-label','Play music')});